import React from "react";
import { Spotlight } from "../ui/Spotlight";

const Hero = () => {
  return (
    <div className="h-[40rem] w-[100dvw] rounded-md flex md:items-center md:justify-center antialiased  relative overflow-hidden">
      {/* spot light */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      {/* grid bg */}
      <div className="h-screen w-full dark:bg-black-100  bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    </div>
  );
};

export default Hero;
