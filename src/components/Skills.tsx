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
import nodejsIcon from "../assets/images/node-icon.svg";
import expressIcon from "../assets/images/express-icon.svg";
import mongodbIcon from "../assets/images/mongodb-icon.svg";
import socketIcon from "../assets/images/socket-icon.svg";
import { useRef } from "react";

function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

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
    { icon: nodejsIcon, name: "Node.js" },
    { icon: expressIcon, name: "ExpressJS" },
    { icon: mongodbIcon, name: "MongoDB" },
    { icon: socketIcon, name: "Socket.io" },
  ];
  return (
    <motion.section
      ref={ref}
      variants={variants1}
      initial="initial"
      animate={inView && "animate"}
      className="md:min-h-screen flex flex-col items-center justify-center my-12"
      id="skills"
    >
      <motion.h1
        variants={variants1}
        className="text-slate-400 text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] font-[700] text-center"
      >
        My <span className="gradient">Tech Stack</span>
      </motion.h1>
      <motion.p
        variants={variants1}
        className="text-slate-200 font-[500] my-4 text-center"
      >
        Tools and technologies I use to craft modern, responsive web experiences.
      </motion.p>
      <motion.div
        variants={variants1}
        className="mt-8 grid grid-cols-3 md:grid-cols-4 place-items-center gap-y-3 lg:gap-y-6 w-full"
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
    </motion.section>
  );
}

export default Skills;
