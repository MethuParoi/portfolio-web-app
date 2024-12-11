import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { HeroDesc } from "./HeroDesc";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
import { HeroImg } from "./HeroImg";

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
      <div className="w-full h-full flex justify-around items-center">
        <div>
          <HeroDesc />
        </div>
        <div>
          <HeroImg />
        </div>
      </div>
    </div>
  );
};

export default Hero;
