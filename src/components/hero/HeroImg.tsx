"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
import img from "../../../public/img/profile.png";

export function HeroImg() {
  return (
    <div className="flex justify-center items-center">
      <BackgroundGradient className="rounded-[22px]  bg-transparent p-1">
        <div className="rounded-[15px] overflow-hidden ">
          <Image
            src={img}
            alt="jordans"
            height="450"
            width="450"
            className="object-contain rounded-[15px]"
          />
        </div>
      </BackgroundGradient>
    </div>
  );
}

{
  /* <div>
      <BackgroundGradient className="rounded-[50%] max-w-sm p-1 bg-white dark:bg-teal-400">
        <Image
          src={img}
          alt="jordans"
          height="450"
          width="450"
          className="object-contain rounded-[50%] "
        />
      </BackgroundGradient>
    </div> */
}
