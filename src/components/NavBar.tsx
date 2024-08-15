"use client";
import Image from "next/image";
import Link from "next/link";
import github from "../assets/images/github-logo.svg";
import { MdMenu, MdClose } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TabContext } from "./Provider";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  // const [tab, setTab] = useState("");
  const tabContext = useContext(TabContext)

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [open]);

  const variants = {
    initial: {
      x: "100%",
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
    reverse: {
      x: "100%",
      transition: {
        delay: 0.2,
        duration: 0.8,
      },
    },
  };
  const linksVariants = {
    linksInitial: {
      opacity: 0,
      y: "-20px",
    },
    linksOpen: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
    linksClose: {
      y: "-20px",
      opacity: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <>
      <div className="sticky text-white flex justify-between items-center padding backdrop-blur-[3px] top-0 py-2 w-full z-[100]">
        <Link
          href="#hero"
          onClick={()=>tabContext?.setTab("")}
          className="text-[1.5rem] font-semibold rounded-full p-1 border-[1.5px] border-slate-400 hover:bg-slate-600"
        >
          <span className="text-slate-400">O</span>
          <span className="text-blue-600">D</span>
        </Link>
        <div className="justify-between items-center gap-x-16 hidden md:flex">
          <div className="flex items-center gap-x-4">
            <Link
              href="#about"
              onClick={()=>tabContext?.setTab("about")}
              className={`${tabContext?.tab === "about" && "bg-blue-600"} font-semibold hover:bg-blue-600 rounded-md px-2 py-1`}
            >
              about me
            </Link>
            <Link
              href="#skills"
              onClick={()=>tabContext?.setTab("skills")}
              className={`${tabContext?.tab === "skills" && "bg-blue-600"} font-semibold hover:bg-blue-600 rounded-md px-2 py-1`}
            >
              skills
            </Link>
            <Link
              href="#projects"
              onClick={()=>tabContext?.setTab("projects")}
              className={`${tabContext?.tab === "projects" && "bg-blue-600"} font-semibold hover:bg-blue-600 rounded-md px-2 py-1`}
            >
              projects
            </Link>
            <Link
              href="#contact"
              onClick={()=>tabContext?.setTab("contact")}
              className={`${tabContext?.tab === "contact" && "bg-blue-600"} font-semibold hover:bg-blue-600 rounded-md px-2 py-1`}
            >
              contact me
            </Link>
          </div>
          <Link href="https://github.com/Olowokere-Destiny" target="_blank">
            <Image
              src={github}
              width={100}
              height={100}
              alt="github logo"
              className="w-8 h-8 cursor-pointer hover:opacity-80"
            />
          </Link>
        </div>
        <div onClick={() => setOpen(true)} className="block md:hidden">
          <div className="p-2 rounded-sm text-slate-400 border border-slate-400 cursor-pointer">
            <MdMenu />
          </div>
        </div>
      </div>
      <motion.div
        variants={variants}
        initial="initial"
        animate={open ? "animate" : "reverse"}
        className={`${
          open && "block"
        } fixed top-0 md:hidden w-[80vw] h-screen backdrop-blur-sm right-0 z-[1500] border-l border-gray-600 flex flex-col justify-center bg-black/20`}
      >
        <div
          onClick={() => {
            setOpen(false)
          }}
          className="absolute top-3 right-3 p-2 rounded-sm text-slate-400 border border-slate-400 cursor-pointer"
        >
          <MdClose />
        </div>
        <motion.div
          variants={linksVariants}
          initial="linksInitial"
          animate={open ? "linksOpen" : "linksClose"}
          className="flex flex-col gap-y-4 items-center justify-center"
        >
          <motion.div variants={linksVariants}>
            <Link
              onClick={() => {
                setOpen(false)
                tabContext?.setTab("about")
              }}
              href="#about"
              className={`${
                tabContext?.tab === "about" && "bg-blue-600"
              } font-semibold text-white hover:bg-blue-600 rounded-md px-2 py-1`}
            >
              about me
            </Link>
          </motion.div>
          <motion.div variants={linksVariants}>
            <Link
              onClick={() => {
                setOpen(false)
                tabContext?.setTab("skills")
              }}
              href="#skills"
              className={`${
                tabContext?.tab === "skills" && "bg-blue-600"
              } font-semibold text-white hover:bg-blue-600 rounded-md px-2 py-1`}
            >
              skills
            </Link>
          </motion.div>
          <motion.div variants={linksVariants}>
            <Link
              onClick={() => {
                setOpen(false)
                tabContext?.setTab("projects")
              }}
              href="#projects"
              className={`${
                tabContext?.tab === "projects" && "bg-blue-600"
              } font-semibold text-white hover:bg-blue-600 rounded-md px-2 py-1`}
            >
              projects
            </Link>
          </motion.div>
          <motion.div variants={linksVariants}>
            <Link
              onClick={() => {
                setOpen(false)
                tabContext?.setTab("contact")
              }}
              href="#contact"
              className={`${
                tabContext?.tab === "contact" && "bg-blue-600"
              } font-semibold text-white hover:bg-blue-600 rounded-md px-2 py-1`}
            >
              contact me
            </Link>
          </motion.div>
          <motion.div variants={linksVariants}>
            <Link
              href="https://github.com/Olowokere-Destiny"
              target="_blank"
              onClick={() => {
                setOpen(false)
              }}
            >
              <Image
                src={github}
                width={100}
                height={100}
                alt="github logo"
                className="w-8 h-8 cursor-pointer hover:opacity-80 mx-auto mt-3"
              />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default NavBar;
