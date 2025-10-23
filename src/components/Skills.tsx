"use client";
import Image from "next/image";
import { domAnimation, LazyMotion, m, useInView } from "framer-motion";
import { useRef } from "react";
import { icons } from "@/utils/constants";

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
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const iconVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.section
        ref={ref}
        variants={variants1}
        initial="initial"
        animate={inView && "animate"}
        className="md:min-h-screen flex flex-col items-center justify-center my-12"
        id="skills"
      >
        <m.h1
          variants={variants1}
          className="text-slate-200 text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] font-[700] text-center"
        >
          My <span className="gradient">Tech Stack</span>
        </m.h1>
        <m.p
          variants={variants1}
          className="text-slate-200 font-[500] my-4 text-center"
        >
          Tools and technologies I use to craft modern, responsive web
          experiences.
        </m.p>
        <m.div
          variants={iconVariants}
          animate={inView && "animate"}
          className="mt-8 grid grid-cols-3 md:grid-cols-4 place-items-center gap-y-3 lg:gap-y-6 w-full"
        >
          {icons.map(({ icon, name }, i) => (
            <m.div
              variants={iconVariants}
              data-testid="skills"
              key={i}
              className="flex flex-col gap-y-2"
            >
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
            </m.div>
          ))}
        </m.div>
      </m.section>
    </LazyMotion>
  );
}

export default Skills;
