"use client";
import Image from "next/image";
import heroImg from "../assets/images/about-img.svg";
import { motion, useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { TabContext } from "./Provider";

const variants = {
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
  initial: {
    opacity: 0,
    x: "40px",
  },
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });
  const tabContext = useContext(TabContext);

  useEffect(()=>{
    if (inView) {
      tabContext?.setTab("about")
    }
    return () => {
      tabContext?.setTab("hero")
    }
  },[inView, tabContext?.setTab, tabContext?.tab])

  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate={inView && "animate"}
      initial="initial"
      className="min-h-[95vh] flex flex-col items-center justify-center"
      id="about"
    >
      <div className="flex flex-col lg:flex-row items-center gap-y-10 lg:gap-y-0 justify-between ">
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-[700]">
            <span className="text-blue-600">About</span>{" "}
            <span className="text-slate-400">Me</span>
          </h1>
          <p className="text-[1.2rem] text-slate-300 font-[500]">
            A dedicated frontend developer with a fervent love for coding and
            computers. Known for effective communication skills, I seamlessly
            blend technical expertise with a passion for design, crafting
            engaging digital experiences that leave a lasting impact. Outside of
            work, I find solace in the rhythm of music.
          </p>
        </div>
        <div className="w-full md:w-[70%] lg:w-[40%]">
          <Image
            src={heroImg}
            width={100}
            height={100}
            alt="hero image"
            className="w-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
