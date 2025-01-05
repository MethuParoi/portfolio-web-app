import React from "react";
import Image from "next/image";

import kiit_img from "../../../public/kiit.jpg";
import tech from "../../../public/exp1.svg";
import flexible from "../../../public/b5.svg";
import dcc from "../../../public/Dhaka_city_college.jpg";
import "animate.css";
import AboutCard from "./AboutCard";

const AboutMe = () => {
  return (
    <section className="pb-16 pt-10 sm:pt-20">
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-center mb-12">
        About <span className="text-teal-400">Me</span>
      </h1>

      <div
        className="grid gap-6 max-w-7xl mx-auto
        grid-cols-1 md:grid-cols-3 "
      >
        {/* kiit */}
        <AboutCard
          img={kiit_img}
          title="Pursuing my undergrad in Computer Science and Engineering"
          institute="KIIT, Bhubaneswar, India"
          desc1="Full Funded SII Scholarship by the Ministry of Education, India"
          desc2="Final Semester ongoing"
          id={1}
        />

        {/* tech enthusiast */}
        <div
          className=" flex flex-col justify-between items-center p-6 h-[300px] my-5 sm:my-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className="flex justify-center items-center h-[70vh] lg:h-2/3 mb-4">
            <Image
              src={tech}
              alt="img"
              width={190}
              height={50}
              className="object-cover object-center"
            />
          </div>

          <h3 className="text-xl text-center font-bold text-neutral-200">
            Tech enthusiast and a passionate learner
          </h3>
        </div>

        {/* dhaka city college */}
        <AboutCard
          img={dcc}
          title="Passed Higher Secondary Certificate from Dhaka City College"
          institute=" Dhaka City College, Dhaka, Bangladesh"
          desc1="batch of 2019"
          desc2=""
          id={2}
        />

        {/* flexible */}

        <div
          className="flex flex-col justify-between items-center p-6 h-[300px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className="flex justify-center items-center h-[70vh] lg:h-2/3 mb-4">
            <Image
              src={flexible}
              alt="img"
              width={260}
              height={50}
              className="object-cover object-center"
            />
          </div>

          <h3 className="text-xl text-center font-bold text-neutral-200">
            I'm very flexible with time zone communications
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
