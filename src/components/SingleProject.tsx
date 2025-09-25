"use client";
import Image, { StaticImageData } from "next/image";
import { domAnimation, LazyMotion, m, useInView } from "framer-motion";
import { useRef } from "react";
import github from "../assets/images/github-logo.svg";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";

interface Props {
  image?: StaticImageData;
  title: string;
  description: string;
  codeUrl: string;
  liveUrl: string;
  hasDemoVideo?: boolean;
  demoVideoUrl?: string;
}
const SingleProject = ({
  image,
  title,
  description,
  codeUrl,
  liveUrl,
  hasDemoVideo,
  demoVideoUrl,
}: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });
  console.log(demoVideoUrl);
  const variant = {
    initial: {
      scale: 0.95,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        variants={variant}
        animate={inView ? "animate": "initial"}
        initial="initial"
        ref={ref}
        className="w-full flex lg:flex-row flex-col gap-8 justify-center lg:justify-between items-center my-12 bg-white/10 p-4 rounded-3xl"
      >
        <div className="w-full lg:w-1/2">
          {hasDemoVideo ? (
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <video
                controls
                controlsList="nodownload"
                playsInline
                className="w-full h-full"
              >
                <source src={demoVideoUrl} type="video/mp4" />
              </video>
            </div>
          ) : (
            <Image
              src={image || ""}
              width={500}
              height={500}
              className="w-full rounded-2xl"
              alt="Project Image"
            />
          )}
        </div>
        <m.div
          className="w-full lg:w-1/2"
          animate={inView ? "animate" : "initial"}
          initial="initial"
        >
          <h1 className="gradient w-max text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-[600]">
            {title}
          </h1>
          <p className="text-[1rem] text-slate-200 font-medium">
            {description}
          </p>

          <div className="flex items-center gap-x-8 mt-3">
            <Link
              href={codeUrl ? codeUrl : ""}
              target="_blank"
              className="flex items-center gap-x-1 rounded-full text-[0.8rem] px-3 py-2 hover:bg-white/40 transition-[0.5] text-white bg-white/30"
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
            <Link
              href={liveUrl}
              target="_blank"
              className="flex items-center gap-x-1 rounded-full text-[0.8rem] px-3 py-2 hover:bg-red-400/90 transition-[0.5] text-white bg-red-400"
            >
              <span>Live Site</span>
              <RxExternalLink className="text-[1rem]" />
            </Link>
          </div>
        </m.div>
      </m.div>
    </LazyMotion>
  );
};

export default SingleProject;
