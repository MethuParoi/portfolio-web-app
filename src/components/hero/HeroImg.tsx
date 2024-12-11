"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
import img from "../../../public/img/profile.png";
import "animate.css";

export function HeroImg() {
  return (
    <div className="flex justify-center items-center animate__animated animate__fadeInRight animate__slow">
      <BackgroundGradient className="rounded-[22px]  bg-transparent p-1">
        <div className="rounded-[15px] overflow-hidden ">
          <Image
            src={img}
            alt="jordans"
            height="340"
            width="340"
            className="object-contain rounded-[15px]"
          />
        </div>
      </BackgroundGradient>
    </div>
  );
}


