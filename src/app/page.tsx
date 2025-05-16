"use client";

import AboutMe from "@/components/about-me/AboutMe";
import GetInTouch from "@/components/get-in-touch/GetInTouch";
import Hero from "@/components/hero/Hero";
import MyContributions from "@/components/my-contributions/MyContributions";
import MyProjects from "@/components/my-projects/MyProjects";
import TechStack from "@/components/tech-stack/TechStack";

export default function Home() {
  return (
    <main className=" relative flex flex-col justify-start items-center overflow-hidden mx-auto min-h-screen ">
      <Hero />
      <TechStack />
      <AboutMe />
      <MyProjects />
      <MyContributions />
      <GetInTouch />
    </main>
  );
}
