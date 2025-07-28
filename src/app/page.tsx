import Hero from "@/components/Hero";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";

export default function Portfolio() {
  return (
    <main className={`bg-white text-black dark:bg-black dark:text-white`}>
      <NavBar />
      <Hero />
      <Skill />
      <Projects />
      <Contact />
    </main>
  );
}
