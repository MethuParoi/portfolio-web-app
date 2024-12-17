"use client";

import { BiLogoTypescript } from "react-icons/bi";
import {
  FaGitAlt,
  FaGithub,
  FaJs,
  FaLocationArrow,
  FaReact,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoLogoNodejs } from "react-icons/io";
import { MdRocketLaunch } from "react-icons/md";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";
import "animate.css";
import { TbBrandRedux } from "react-icons/tb";

interface ButtonProps {
  label: string;
  onClick: () => void;
  type: "hero-btn" | "tech-stack-btn";
  varient: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type, varient }) => {
  const renderIcon = (varient: string) => {
    switch (varient) {
      case "react":
        return <FaReact className="text-2xl sm:text-3xl" />;
      case "next":
        return <SiNextdotjs className="text-2xl sm:text-3xl" />;
      case "js":
        return <FaJs className="text-2xl sm:text-3xl" />;
      case "ts":
        return <BiLogoTypescript className="text-2xl sm:text-3xl" />;
      case "node":
        return <IoLogoNodejs className="text-2xl sm:text-3xl" />;
      case "express":
        return <SiExpress className="text-2xl sm:text-3xl" />;
      case "tailwind":
        return <RiTailwindCssFill className="text-2xl sm:text-3xl" />;
      case "mongo":
        return <SiMongodb className="text-2xl sm:text-3xl" />;
      case "git":
        return <FaGitAlt className="text-2xl sm:text-3xl" />;
      case "redux":
        return <TbBrandRedux className="text-2xl sm:text-3xl" />;
      case "firebase":
        return <RiFirebaseFill className="text-2xl sm:text-3xl" />;
    }
  };

  switch (type) {
    case "hero-btn":
      return (
        <div>
          <button
            onClick={onClick}
            className={`relative inline-flex  overflow-hidden rounded-full p-[1px] ${
              varient === "details"
                ? "h-10 sm:h-12 w-30 sm:w-42"
                : "h-12 sm:h-14 w-30 sm:w-56"
            }`}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-[#393BB2] px-3 py-1 text-sm sm:text-lg font-medium text-teal-200 hover:text-white backdrop-blur-3xl">
              {label}
              <span className="ml-2">
                {varient === "rocket" ? (
                  <MdRocketLaunch className="text-xl" />
                ) : varient === "details" ? (
                  <FaLocationArrow className="text-xl" />
                ) : varient === "github" ? (
                  <FaGithub className="text-xl" />
                ) : (
                  <FiDownload className="text-xl" />
                )}
              </span>
            </span>
          </button>
        </div>
      );
    case "details-btn":
      return (
        <div>
          <button
            onClick={onClick}
            className={`relative inline-flex  overflow-hidden rounded-full p-[1px] ${
              varient === "details"
                ? "h-10 sm:h-12 w-[85dvw] sm:w-42"
                : "h-12 sm:h-14 w-[85dvw] sm:w-56"
            }`}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-[#393BB2] px-3 py-1 text-sm sm:text-lg font-medium text-teal-200 hover:text-white backdrop-blur-3xl">
              {label}
              <span className="ml-2">
                {varient === "rocket" ? (
                  <MdRocketLaunch className="text-xl" />
                ) : varient === "details" ? (
                  <FaLocationArrow className="text-xl" />
                ) : varient === "github" ? (
                  <FaGithub className="text-xl" />
                ) : (
                  <FiDownload className="text-xl" />
                )}
              </span>
            </span>
          </button>
        </div>
      );
    case "tech-stack-btn":
      return (
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-0  bg-gradient-to-r from-pink-600 to-purple-600 blur-xl opacity-85 group-hover:opacity-100 transition duration-200 rounded-[15px] animate__animated animate__fadeInUp animate__slow"></div>
          <button
            onClick={onClick}
            className="p-[3px] relative animate__animated animate__fadeInUp animate__slow"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg animate__animated animate__fadeInUp animate__slow" />
            <div className="px-2 sm:px-6 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-teal-200 sm:text-3xl font-medium hover:bg-transparent flex items-center gap-x-4 sm:gap-x-6">
              {label}
              <span>{renderIcon(varient)}</span>
            </div>
          </button>
        </div>
      );
  }
};

export default Button;
