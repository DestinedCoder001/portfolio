"use client";
import SingleProject from "./SingleProject";
import fashionFusion from "../assets/images/fashion_fusion_screenshot.svg";
import paradiseView from "../assets/images/paradise_view_screenshot.svg";
import dashboard from "../assets/images/dashboard_screenshot.svg";
import abs from "../assets/images/abs_screenshot.svg";
import { useContext, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { TabContext } from "./Provider";

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });
  const tabContext = useContext(TabContext);

  useEffect(() => {
    if (inView) {
      tabContext?.setTab("projects");
    }
    return () => {
      tabContext?.setTab("hero");
    };
  }, [inView, tabContext?.setTab, tabContext?.tab]);

  return (
    <div id="projects" className="flex flex-col items-center justify-center" ref={ref}>
      <h1 className="text-slate-400 text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] font-[700] text-center">
        My <span className="text-blue-600">Projects</span>
      </h1>
      <p className="text-slate-400 font-[500] my-4 text-center">
        These are some of the projects I've worked on
      </p>
      <SingleProject
        title="Fashion Fusion"
        description="This is a clothing and fashion website where you can search and buy your favourite clothing apparels. Just type into the search bar and discover millions of clothing and brands!"
        image={fashionFusion}
        isPrivateCode={false}
        liveUrl="https://fashion-fushion.vercel.app"
        codeUrl="https://github.com/Olowokere-Destiny/fashion-fushion"
      />
      <SingleProject
        title="Paradise View"
        description="This is a property booking website (similar to BOOKING.com) where you can search for hotels, apartments, hostels and more around the globe."
        image={paradiseView}
        isPrivateCode={false}
        liveUrl="https://paradise-view-green.vercel.app"
        codeUrl="https://github.com/Olowokere-Destiny/paradise-view"
      />
      {/* <SingleProject
        title="ABS EduTech"
        description="ABS  is a startup that promises (and delivers) to help make studying easier for the Nigerian student. Users can sign up through the site or sign up via the mobile app."
        isPrivateCode={true}
        image={abs}
        liveUrl="https://www.abstechconnect.com"
      /> */}
      <SingleProject
        title="Dashboard with Charts"
        description="An interactive dashboard that is user friendly and easy to navigate. It simuulates information like users, account records and more all displayed on charts and tables."
        image={dashboard}
        isPrivateCode={false}
        liveUrl="https://olowokere-destiny.github.io/react-dashboard"
        codeUrl="https://github.com/Olowokere-Destiny/react-dashboard"
      />
    </div>
  );
};

export default Projects;
