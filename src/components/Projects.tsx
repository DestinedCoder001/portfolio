"use client";
import SingleProject from "./SingleProject";
import fashionFusion from "../assets/images/fashion_fusion_screenshot.svg";
import paradiseView from "../assets/images/paradise_view_screenshot.svg";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);

  return (
    <section id="projects" className="flex flex-col items-center justify-center" ref={ref}>
      <h1 className="text-slate-300 text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] font-[700] text-center">
        My <span className="gradient">Projects</span>
      </h1>
      <p className="text-slate-200 font-[500] my-4 text-center">
        A selection of projects I’ve brought to life.
      </p>
      <SingleProject
        title="Fashion Fusion"
        description="This is a clothing and fashion website where you can search and buy your favourite clothing apparels. Just type into the search bar and discover millions of clothing and brands!"
        image={fashionFusion}
        liveUrl="https://fashion-fushion.vercel.app"
        codeUrl="https://github.com/Olowokere-Destiny/fashion-fushion"
      />
      <SingleProject
        title="Paradise View"
        description="This is a property booking website (similar to BOOKING.com) where you can search for hotels, apartments, hostels and more around the globe."
        image={paradiseView}
        liveUrl="https://paradise-view-green.vercel.app"
        codeUrl="https://github.com/Olowokere-Destiny/paradise-view"
      />
    </section>
  );
};

export default Projects;
