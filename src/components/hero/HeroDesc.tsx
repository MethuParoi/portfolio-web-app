"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Button from "../ui/Button";

export const HeroDesc = () => {
  const router = useRouter();
  return (
    <div className=" max-w-2xl animate__animated animate__fadeInLeft animate__slow">
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-5 sm:mt-0 mb-[-30px]">
        Hello <span className=" text-teal-400">There!</span>
      </h1>
      <div className=" text-2xl lg:text-3xl font-medium text-gray-700 ">
        <h1
          style={{
            paddingTop: "3.5rem",
            margin: "auto 0",
            fontWeight: 400,
            color: "white",
          }}
        >
          I&apos;m Methu Paroi{" "}
          <span
            style={{ color: "#2dd4bf", fontWeight: "bold", display: "block" }}
          >
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "I am a Frontend Developer",
                "I am a Fullstack Developer",
                "I am a Problem Solver",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        {/* details */}
        <div className="mt-5">
          <p className="text-lg text-gray-400">
            With several years of experience in building efficient and scalable
            web applications, I specialize in both front-end and back-end
            development, along with performance optimization and security
            enhancement. I&apos;m open to new opportunities and
            collaborations—let&apos;s connect!
          </p>
        </div>

        <div className="mt-8 flex flex-row gap-4 justify-start">
          <Button
            label={"See my Projects"}
            onClick={() => {
              const element = document.getElementById("my-projects");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            type={"hero-btn"}
            varient={"rocket"}
          />
          <Button
            label={"Download Resume"}
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1uI7QEo1dXNt5MJAyaqoo7spl3ZtClhHK/view?usp=sharing",
                "_blank"
              );
            }}
            type={"hero-btn"}
            varient={"download"}
          />
          {/* <button
            onClick={() => router.push("/all-projects")}
            className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white text-lg font-medium rounded-lg shadow-lg transition-all"
          >
            See my Projects
          </button>
          <button
            onClick={() => {
              console.log("clicked");
            }}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white text-lg font-medium rounded-lg shadow-lg transition-all"
          >
            Download Resume
          </button> */}
        </div>
      </div>
    </div>
  );
};
