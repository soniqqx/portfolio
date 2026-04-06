import Link from "next/link";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <>
      <div id="home" className="hero animate-fade-in">
        <div className="hero-content">
          <h1 className="gradient-text">Hello, I'm a Developer.</h1>
          <p>I build exceptional and accessible digital experiences for the web. Explore my projects and the technologies I work with.</p>
          <Link href="/#projects" className="btn">View My Work</Link>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
    </>
  );
}
