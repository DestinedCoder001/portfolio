"use client";
import { projects } from "@/utils/constants";
import SingleProject from "./SingleProject";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center"
      ref={ref}
    >
      <h1 className="text-slate-300 text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] font-[700] text-center">
        My <span className="gradient">Projects</span>
      </h1>
      <p className="text-slate-200 font-[500] my-4 text-center">
        A selection of projects I’ve brought to life.
      </p>
      {projects.map((project, index) => (
        <SingleProject
          key={index}
          title={project.title}
          image={project.image}
          description={project.description}
          codeUrl={project.codeUrl}
          liveUrl={project.liveUrl}
          demoVideoUrl={project?.demoVideoUrl}
          hasDemoVideo={project?.hasVideoDemo}
        />
      ))}
    </section>
  );
};

export default Projects;
