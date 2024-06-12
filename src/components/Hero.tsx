"use client";
import Image from "next/image";
import heroImg from "../assets/images/profile-pic.svg";
import { motion } from "framer-motion";
const Hero = () => {
  const variants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      id="hero"
      animate="animate"
      initial="initial"
      className="text-white flex flex-col lg:flex-row items-center justify-around lg:justify-between mt-8 lg:mt-0 min-h-[95vh]"
    >
      <div className="w-full lg:max-w-[55%]">
        <h2 className="text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] font-[700]">
          <span>Hello 👋, I' m</span>
          <div className="my-2">
            <span className="text-slate-400 text-[2.5rem] md:text-[2.7rem] lg:text-[3rem]">
              Olowokere
            </span>{" "}
            <span className="text-blue-600 text-[2.5rem] md:text-[2.7rem] lg:text-[3rem]">
              Destiny
            </span>
          </div>
        </h2>
        <p className="font-[600] text-[1rem] md:text-[1.2rem] text-gray-300 uppercase">
          Frontend Developer
        </p>
        <div className="mt-8 flex md:gap-x-3 justify-between font-bold lg:px-4">
          <div className="text-[#828282] text-[0.8rem] md:text-[1rem] flex items-center gap-x-4">
            <span className="text-[1.2rem] md:text-[2.8rem]">3</span>
            <span className="uppercase">
              years of
              <br /> experience
            </span>
          </div>
          <div className="text-[#828282] text-[0.8rem] md:text-[1rem] flex items-center gap-x-4">
            <span className="uppercase">
              multiple personal projects
              <br /> and real-world projects
            </span>
          </div>
        </div>
      </div>
      <Image
        src={heroImg}
        width={100}
        height={100}
        alt="hero image"
        className="w-[80%] md:w-[60%] lg:w-[35%]"
      />
    </motion.div>
  );
};

export default Hero;
