"use client";
import Image, { StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import github from "../assets/images/github-logo.svg";
import Link from "next/link";
import { HiOutlineNoSymbol } from "react-icons/hi2";
import { RxExternalLink } from "react-icons/rx";

interface Props {
  image: StaticImageData;
  title: string;
  description: string;
  codeUrl?: string;
  liveUrl: string;
  isPrivateCode: boolean;
}
const SingleProject = ({
  image,
  title,
  description,
  codeUrl,
  liveUrl,
  isPrivateCode,
}: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-150px" });
  const variants1 = {
    initial: {
      opacity: 0,
      x: "-80px",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const variants2 = {
    initial: {
      opacity: 0,
      x: "80px",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.4,
        duration: 1,
      },
    },
  };
  return (
    <>
      <div
        ref={ref}
        className="min-h-[90vh] w-full flex lg:flex-row flex-col gap-y-10 md:gap-x-4 justify-center lg:justify-between items-center"
      >
        <motion.div
          variants={variants1}
          animate={inView ? "animate" : "initial"}
          initial="initial"
          className="w-full lg:w-1/2"
        >
          <Image
            src={image}
            width={100}
            height={100}
            className="w-full"
            alt="Project Image"
          />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2"
          variants={variants2}
          animate={inView ? "animate" : "initial"}
          initial="initial"
        >
          <motion.h1
            variants={variants2}
            className="text-blue-500 text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-[600]"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={variants2}
            className="text-[1rem] text-slate-300 font-[500]"
          >
            {description}
          </motion.p>

          <motion.div className="flex items-center justify-around mt-3">
            {isPrivateCode ? (
              <button
                disabled
                className="flex items-center gap-x-1 rounded-md text-[0.8rem] px-3 py-2 text-white bg-gray-900 border border-slate-700 cursor-not-allowed"
              >
                Private code
                <HiOutlineNoSymbol className="text-[1rem]" />
              </button>
            ) : (
                <Link
                href={codeUrl ? codeUrl : ""}
                target="_blank"
                className="flex items-center gap-x-1 rounded-md text-[0.8rem] px-3 py-2 hover:scale-105 transition-[0.4] text-white bg-gray-900 border border-slate-700"
                >
                <span>View code</span>
                <span>
                  <Image
                    src={github}
                    width={100}
                    height={100}
                    alt="github logo"
                    className="w-4 h-4"
                  />
                </span>
              </Link>
            )}
            <Link
              href={liveUrl}
              target="_blank"
              className="flex items-center gap-x-1 rounded-md text-[0.8rem] px-3 py-2 hover:scale-105 transition-[0.4] text-white bg-red-400 border border-slate-700"
            >
              <span>Live Site</span>
            <RxExternalLink className="text-[1rem]" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default SingleProject;
