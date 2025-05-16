"use client";
import React from "react";
import Image from "next/image";
// import { BackgroundGradient } from "../ui/background-gradient";
import img from "../../../public/img/profile(selected).png";
import "animate.css";

export function HeroImg() {
  return (
    <div className="flex justify-center items-center animate__animated animate__fadeInRight animate__slow">
      <div className="relative group cursor-pointer">
        <div className="absolute -inset-3 bg-gradient-to-r from-pink-600 to-purple-600 blur-xl opacity-85 group-hover:opacity-100 transition duration-200 rounded-[50%] "></div>
        <div className="rounded-[50%] overflow-hidden relative ">
          <Image
            src={img}
            alt="jordans"
            height="340"
            width="340"
            className="object-contain rounded-[50%] border-4 border-teal-500"
          />
        </div>
      </div>
    </div>
  );
}


