"use client";

import { FaLocationArrow } from "react-icons/fa";
import { PinContainer } from "../ui/3d-pin";
import { ProjectCard } from "./ProjectCard";
import Image from "next/image";
import Button from "../ui/Button";
import { use, useEffect, useState } from "react";
import { getProjects } from "@/lib/api-projects";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    console.log(projects);
  }, [projects]);
  return (
    <div className="mb-14 md:mb-0 mt-4 md:mt-0 md:py-16 ">
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-[-30px] text-center animate__animated animate__fadeInUp animate__slow">
        Recent <span className=" text-teal-400">Projects</span>
      </h1>

      {/* recent project grid */}
      <div className="mt-40 mb-32">
        {projects?.map((project, index) => (
          <PinContainer
            key={index}
            title={`Live Demo: ${project.title}`}
            href={"#"}
          >
            <div className="">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[40vh] mb-10 ">
                <div className="h-[20vh]">
                  <Image
                    src={project.image.split(",")[0]}
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
                {/* icons */}
                <div className="flex items-center">
                  {/* {iconList.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[0.2]
                    rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{ transform: `translateX(-${5 * index * 2}px)` }}
                  >
                    <Image src={icon} alt={icon} className="p-2" />
                  </div>
                ))} */}
                </div>
                {/* button */}
                <Button
                  label={"View Details"}
                  type={"hero-btn"}
                  varient={"details"}
                  onClick={() => {
                    console.log("View Details");
                  }}
                />
                {/* <div className="flex items-center gap-x-4">
                <p>View Details</p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </div> */}
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
