"use client";
import Image from "next/image";
import heroImg from "../assets/images/profile-pic.svg";
import { domAnimation, LazyMotion, m } from "framer-motion";
const Hero = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        variants={variants}
        id="hero"
        animate="animate"
        initial="initial"
        className="text-white flex flex-col gap-y-6 lg:flex-row items-center justify-around lg:justify-between mt-20 lg:mt-0 min-h-[95vh]"
      >
        <div className="w-full lg:max-w-[55%]">
          <h2 className="text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] font-[700]">
            <span>Hello 👋, I' m</span>
            <div className="my-2">
              <span className="text-blue-600 text-[2.5rem] md:text-[2.7rem] lg:text-[3rem]">
                Destiny
              </span>{" "}
              <span className="text-slate-400 text-[2.5rem] md:text-[2.7rem] lg:text-[3rem]">
                Olowokere
              </span>
            </div>
          </h2>
          <p className="text-[1.2rem] font-medium">
            a{" "}
            <span className="text-[1.4rem] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 uppercase font-semibold">
              frontend developer
            </span>{" "}
            passionate about building responsive, user-friendly web applications
            with modern technologies.
          </p>
        </div>
        <Image
          src={heroImg}
          width={100}
          height={100}
          alt="hero image"
          className="w-full md:w-[60%] lg:w-[35%]"
        />
      </m.div>
    </LazyMotion>
  );
};

export default Hero;
