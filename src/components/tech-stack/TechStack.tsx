"use client";

import Button from "../ui/Button";
import LazyLoad from "react-lazyload";
import "animate.css";

const TechStack = () => {
  return (
    <LazyLoad height={200} offset={100} once>
      <div className="mb-14 md:mb-0 mt-4 md:mt-0 md:my-16 ">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-[-30px] text-center animate__animated animate__fadeInUp animate__slow">
          My <span className=" text-teal-400">Tech Stack</span>
        </h1>
        {/* tech stacks */}
        <div className="flex flex-col items-center mt-20 ">
          {/* row 1 */}
          <div className="flex items-center justify-center gap-x-10 gap-y-6 flex-wrap">
            {/* React */}

            <Button
              label={"React"}
              type={"tech-stack-btn"}
              varient={"react"}
              onClick={() => {}}
            />

            {/* Javascript */}

            <Button
              label={"Javascript"}
              type={"tech-stack-btn"}
              varient={"js"}
              onClick={() => {}}
            />

            {/* Next */}

            <Button
              label={"Next.js"}
              type={"tech-stack-btn"}
              varient={"next"}
              onClick={() => {}}
            />

            <div className="sm:hidden">
              <Button
                label={"Redux"}
                type={"tech-stack-btn"}
                varient={"redux"}
                onClick={() => {}}
              />
            </div>
          </div>
          {/* row 2 */}
          <div className="flex items-center justify-center gap-x-10 gap-y-6 flex-wrap md:mt-8 mt-6">
            {/* Node */}

            <Button
              label={"Node.js"}
              type={"tech-stack-btn"}
              varient={"node"}
              onClick={() => {}}
            />

            {/* Typescript */}

            <Button
              label={"Typescript"}
              type={"tech-stack-btn"}
              varient={"ts"}
              onClick={() => {}}
            />

            {/* Express */}

            <Button
              label={"Express.js"}
              type={"tech-stack-btn"}
              varient={"express"}
              onClick={() => {}}
            />

            {/* Redux */}
            <Button
              label={"Redux"}
              type={"tech-stack-btn"}
              varient={"redux"}
              onClick={() => {}}
            />
          </div>
          {/* row 3 */}
          <div className="flex items-center justify-center gap-x-10 gap-y-6 flex-wrap md:mt-8 mt-6">
            {/* Mongo */}

            <Button
              label={"MongoDB"}
              type={"tech-stack-btn"}
              varient={"mongo"}
              onClick={() => {}}
            />

            {/* git */}

            <Button
              label={"Git"}
              type={"tech-stack-btn"}
              varient={"git"}
              onClick={() => {}}
            />

            {/* Tailwind */}
            <div className="hidden sm:block">
              <Button
                label={"Tailwind"}
                type={"tech-stack-btn"}
                varient={"tailwind"}
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default TechStack;
