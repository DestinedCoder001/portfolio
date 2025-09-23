import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="p-[5%] overflow-hidden">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
