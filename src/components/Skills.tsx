"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import htmlIcon from "../assets/images/html-icon.svg";
import cssIcon from "../assets/images/css-icon.svg";
import bootstrapIcon from "../assets/images/bootstrap-icon.svg";
import tailwindIcon from "../assets/images/tailwind-icon.svg";
import jsIcon from "../assets/images/js-icon.svg";
import gitIcon from "../assets/images/git-icon.svg";
import tsIcon from "../assets/images/typescript-icon.svg";
import reactIcon from "../assets/images/react-icon.svg";
import nextjsIcon from "../assets/images/nextjs-icon.png";
import { useContext, useEffect, useRef } from "react";
import { TabContext } from "./Provider";
function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });
  const tabContext = useContext(TabContext)

  useEffect(()=>{
    if (inView) {
      tabContext?.setTab("skills")
    }
    return () => {
      tabContext?.setTab("hero")
    }
  },[inView, tabContext?.setTab, tabContext?.tab])

  const variants1 = {
    initial: {
      opacity: 0,
      y: "10px",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3,
      },
    },
  };
  const icons = [
    { icon: htmlIcon, name: "HTML5" },
    { icon: cssIcon, name: "CSS3" },
    { icon: bootstrapIcon, name: "Bootstrap" },
    { icon: tailwindIcon, name: "TailwindCSS" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: tsIcon, name: "TypeScript" },
    { icon: gitIcon, name: "Git" },
    { icon: reactIcon, name: "ReactJS" },
    { icon: nextjsIcon, name: "Next JS" },
  ];
  return (
    <motion.div
      ref={ref}
      variants={variants1}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="min-h-[95vh] md:min-h-screen flex flex-col items-center justify-center"
      id="skills"
    >
      <motion.h1
        variants={variants1}
        className="text-slate-400 text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] font-[700] text-center"
      >
        My <span className="text-blue-600">Tech Stack</span>
      </motion.h1>
      <motion.p
        variants={variants1}
        className="text-slate-400 font-[500] my-4 text-center"
      >
        Technologies I utilize to create beautiful websites and user interfaces
      </motion.p>
      <motion.div
        variants={variants1}
        className="mt-8 grid grid-cols-3 place-items-center gap-y-3 lg:flex lg:justify-between items-center w-full"
      >
        {icons.map(({ icon, name }, i) => (
          <div key={i} className="flex flex-col gap-y-1">
            <Image
              src={icon}
              alt="stack icon"
              width={100}
              height={100}
              className="w-16 h-16 hover:scale-110 hover:-translate-y-1 mx-auto transition-all"
            />
            <p className="text-slate-200 text-[0.8rem] text-center font-[600]">
              {name}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
