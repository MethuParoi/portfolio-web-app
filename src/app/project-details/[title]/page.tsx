"use client";

import Button from "@/components/ui/Button";
// import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getProjectDetails } from "@/lib/api-projects";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt, FaJs, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui, SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import Slider from "@/components/project-details/Slider";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

interface ProjectDetails {
  title?: string;
  shortDescription?: string;
  siteLink?: string;
  hasServer?: boolean;
  keyFeatures?: string[];
  technologyUsed?: string[];
  image?: string;
  clientCodebaseLink?: string;
  serverCodebaseLink?: string;
}

export default function ProjectDetails() {
  const [viewDetails, setViewDetails] = useState(false);

  const [projectDetails, setProjectDetails] = useState<ProjectDetails>({});

  const router = useRouter();

  const pathname = usePathname();
  let title = pathname.split("/").pop();
  title = (title ?? "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  // console.log("title", title);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjectDetails(title);
      setProjectDetails(data[0]);
      // console.log("projects", data);
    };
    fetchProjects();
  }, [title]);

  const renderIcon = (varient: string) => {
    switch (varient) {
      case "react":
        return <FaReact className="text-2xl sm:text-3xl" />;
      case "next":
        return <SiNextdotjs className="text-2xl sm:text-3xl" />;
      case "javascript":
        return <FaJs className="text-2xl sm:text-3xl" />;
      case "typescript":
        return <BiLogoTypescript className="text-2xl sm:text-3xl" />;
      case "node":
        return <IoLogoNodejs className="text-2xl sm:text-3xl" />;
      case "express":
        return <SiExpress className="text-2xl sm:text-3xl" />;
      case "tailwind":
        return <RiTailwindCssFill className="text-2xl sm:text-3xl" />;
      case "mongodb":
        return <SiMongodb className="text-2xl sm:text-3xl" />;
      case "git":
        return <FaGitAlt className="text-2xl sm:text-3xl" />;
      case "redux":
        return <TbBrandRedux className="text-2xl sm:text-3xl" />;
      case "firebase":
        return <RiFirebaseFill className="text-2xl sm:text-3xl" />;
      case "daisyui":
        return <SiDaisyui className="text-2xl sm:text-3xl" />;
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center gap-y-10 md:gap-y-0 px-3 lg:px-0 pt-20 md:pt-24 xl:max-w-[1300px] pb-14 mx-auto">
      {/* title & short description */}
      <div className="w-[85dvw]">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-x-2 text-teal-400 font-medium mb-4 hover:text-teal-500"
        >
          <IoArrowBack className="text-xl text-teal-400" />
          Back to Home
        </button>
        <h1 className="text-2xl lg:text-3xl font-bold leading-tight mb-[-30px] text-teal-400">
          {projectDetails?.title}
        </h1>
        {/* short description */}
        <div className="flex flex-col ">
          <p
            className={`text-lg text-gray-200 mt-10 mb-1 ${
              viewDetails === false ? "line-clamp-2" : ""
            }`}
          >
            {projectDetails?.shortDescription}
          </p>
          <button
            onClick={() => setViewDetails(!viewDetails)}
            className="py-1 px-2 text-sm font-medium text-white rounded-md bg-teal-500  hover:bg-teal-600 self-end"
          >
            {viewDetails === false ? "see more..." : "see less..."}
          </button>
        </div>
      </div>
      {/* flex layout */}
      <div className="flex lg:flex-row flex-col gap-y-10 lg:gap-y-0 items-start justify-around sm:m-10 xl:max-w-[1300px]">
        {/* slider */}
        <div className="lg:w-[40dvw] w-[85dvw] lg:mr-10">
          <Slider imgSlides={projectDetails?.image ?? ""} />
        </div>
        <div className="lg:w-[40dvw] w-[85dvw] lg:ml-10">
          {/* project details */}
          <div className=" flex sm:flex-row flex-col gap-y-10  sm:gap-x-10">
            <Button
              label="Visit Live Website"
              type="details-btn"
              varient="rocket"
              onClick={() => {
                window.open(projectDetails?.siteLink, "_blank");
              }}
            />
            {!projectDetails?.hasServer && (
              <Button
                label="Client Codebase"
                type="details-btn"
                varient="github"
                onClick={() => {
                  window.open(projectDetails?.clientCodebaseLink, "_blank");
                }}
              />
            )}
          </div>
          {projectDetails?.hasServer && (
            <div className="mt-8 flex sm:flex-row flex-col gap-y-10  sm:gap-x-10 gap-x-10">
              <Button
                label="Client Codebase"
                type="details-btn"
                varient="github"
                onClick={() => {
                  window.open(projectDetails?.clientCodebaseLink, "_blank");
                }}
              />
              <Button
                label="Server Codebase"
                type="details-btn"
                varient="github"
                onClick={() => {
                  window.open(projectDetails?.serverCodebaseLink, "_blank");
                }}
              />
            </div>
          )}
          {/* Key features */}
          <div className="mt-10">
            <h1 className="text-2xl lg:text-3xl font-bold leading-tight mb-[-30px]">
              <span className=" text-teal-400 mr-2">Key</span>Features:
            </h1>
            <div className="mt-10">
              {projectDetails?.keyFeatures?.map((feature, index) => (
                <div key={index} className="flex items-start mt-3">
                  {/* mobile pointer */}
                  <VscDebugBreakpointLog className="text-2xl text-teal-400 w-48 h-6 mt-1 lg:hidden" />
                  {/* desktop pointer */}
                  <VscDebugBreakpointLog className="text-2xl text-teal-400 mt-1 hidden lg:block" />
                  <p className="text-lg text-gray-100 w-[250vw] lg:w-[550px] font-bold">
                    {feature.split(":")[0]}:
                    <span className="font-normal text-gray-200">
                      {feature.split(":")[1]}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Technologies */}
          <div className="mt-10">
            <h1 className="text-2xl lg:text-3xl font-bold leading-tight mb-[-30px]">
              <span className=" text-teal-400 mr-2">Technologies</span>Used:
            </h1>
            <div className="mt-10">
              {projectDetails?.technologyUsed?.map((technology, index) => (
                <div key={index} className="flex items-start gap-x-5 mt-3 ">
                  <VscDebugBreakpointLog className="text-2xl text-teal-400 mt-1" />
                  <div className="flex items-center w-[120px]">
                    <p className="text-lg text-gray-100 lg:w-[550px] font-bold">
                      {technology}
                    </p>
                    <p className="text-teal-400">
                      {renderIcon(technology.toLowerCase())}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
