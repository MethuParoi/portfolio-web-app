"use client";

import { BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt, FaJs, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { getProjects } from "@/lib/api-projects";
import "animate.css";
import { useRouter } from "next/navigation";

const MyProjects = () => {
  interface Project {
    title: string;
    siteLink: string;
    image: string;
    shortDescription: string;
    technologyUsed: string[];
  }

  const [projects, setProjects] = useState<Project[]>([]);

  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
      console.log("projects", data);
    };
    fetchProjects();
  }, []);

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
      case "daisyui":
        return <SiDaisyui className="text-2xl sm:text-3xl" />;
      case "firebase":
        return <RiFirebaseFill className="text-2xl sm:text-3xl" />;
    }
  };

  return (
    <div className="mb-14 md:mb-0 mt-4 md:mt-0 md:py-16 ">
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-[-30px] text-center animate__animated animate__fadeInUp animate__slow">
        Recent <span className=" text-teal-400">Projects</span>
      </h1>

      {/* recent project grid */}
      <div className="mt-48 mb-32 grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[300px] sm:gap-y-[200px] lg:gap-x-[180px] lg:gap-y-[300px]">
        {projects?.map((project, index) => (
          <PinContainer
            key={index}
            title={`${project.title}`}
            href={project?.siteLink}
            detailsLink={`/project-details/${project.title
              .replace(/ /g, "-")
              .toLowerCase()}`}
          >
            <div className="animate__animated animate__fadeInUp animate__slow">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[40vh] mb-10 ">
                <div className="h-[20vh]">
                  <Image
                    src={project.image.split(",")[0]} // Ensure the src is a valid string URL
                    alt="Project Image"
                    layout="fill"
                    objectFit="cover"
                    className="h-full lg:h-[15vh] w-full rounded-lg"
                  />
                </div>
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {project.title}
              </h1>
              <p className="lg:text-md lg:font-normal font-light text-sm line-clamp-2">
                {project.shortDescription}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project?.technologyUsed?.map((icon, index) => (
                    <div
                      key={index}
                      className="
                    rounded-full text-gray-100 bg-gradient-to-r from-[#667eea] to-[#764ba2] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      {renderIcon(icon.toLowerCase())}
                      {/* <Image src={icon} alt={icon} className="p-2" /> */}
                    </div>
                  ))}
                </div>
                <Button
                  label={"View Details"}
                  type={"hero-btn"}
                  varient={"details"}
                  onClick={() => {
                    const link = project.title.replace(/ /g, "-").toLowerCase();
                    router.push(`/project-details/${link}`);
                  }}
                />
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
