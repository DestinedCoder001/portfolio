"use client";
import Image from "next/image";
import Link from "next/link";
import github from "../assets/images/github-logo.svg";
import { MdMenu, MdClose } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { navLinks } from "@/utils/constants";
import NavBarLink from "./NavBarLink";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openStyling = open
    ? { height: (contentRef.current?.scrollHeight ?? 0) + 120 }
    : { height: 60 };

  const expandVariant = {
    initial: { height: 60 },
    animate: { ...openStyling, transition: { duration: 0.3 } },
  };

  const slideDownVariant = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="fixed w-[90%] left-1/2 -translate-x-1/2 top-4 z-[100]">
        <m.div
          variants={slideDownVariant}
          initial="initial"
          animate="animate"
          className="rounded-3xl overflow-hidden"
        >
          <m.div
            variants={expandVariant}
            initial="initial"
            animate="animate"
            className="bg-white/10 text-white flex flex-col backdrop-blur-xl px-3 py-2 overflow-hidden"
          >
            <div className="flex justify-between items-center h-[60px]">
              <Link
                href="#hero"
                className="font-semibold rounded-full p-1 border-[1.5px] border-slate-400 hover:bg-slate-600"
              >
                <span className="gradient">D</span>
                <span className="text-slate-200">O</span>
              </Link>
              <div className="justify-between items-center gap-x-16 hidden md:flex">
                <div className="flex items-center gap-x-4 font-medium">
                  {navLinks.map((link) => (
                    <NavBarLink
                      key={link.href}
                      href={link.href}
                      text={link.text}
                    />
                  ))}
                </div>
                <Link
                  href="https://github.com/Olowokere-Destiny"
                  target="_blank"
                >
                  <Image
                    src={github}
                    width={100}
                    height={100}
                    alt="github logo"
                    className="w-8 h-8 cursor-pointer hover:opacity-80"
                  />
                </Link>
              </div>
              <div
                onClick={() => setOpen(!open)}
                className="block md:hidden active:bg-white/20 rounded-full"
              >
                <div className="p-2 rounded-sm text-slate-200 cursor-pointer">
                  {open ? <MdClose size={24} /> : <MdMenu size={24} />}
                </div>
              </div>
            </div>
            <div
              ref={contentRef}
              className="flex flex-col items-center gap-y-4 mt-6 md:hidden"
            >
              {navLinks.map((link) => (
                <NavBarLink
                  key={link.href}
                  href={link.href}
                  text={link.text}
                  onClick={() => setOpen(false)}
                />
              ))}
              <Link
                href="https://github.com/Olowokere-Destiny"
                target="_blank"
                onClick={() => setOpen(false)}
              >
                <Image
                  src={github}
                  width={100}
                  height={100}
                  alt="github logo"
                  className="w-8 h-8 cursor-pointer hover:opacity-80 mx-auto mt-3"
                />
              </Link>
            </div>
          </m.div>
        </m.div>
      </div>
    </LazyMotion>
  );
};

export default NavBar;