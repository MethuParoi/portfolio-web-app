"use client";

import Button from "../ui/Button";
import "animate.css";

const TechStack = () => {
  return (
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
            onClick={() => console.log("clicked")}
          />

          {/* Javascript */}

          <Button
            label={"Javascript"}
            type={"tech-stack-btn"}
            varient={"js"}
            onClick={() => console.log("clicked")}
          />

          {/* Next */}

          <Button
            label={"Next.js"}
            type={"tech-stack-btn"}
            varient={"next"}
            onClick={() => console.log("clicked")}
          />

          <div className="sm:hidden">
            <Button
              label={"Redux"}
              type={"tech-stack-btn"}
              varient={"redux"}
              onClick={() => console.log("clicked")}
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
            onClick={() => console.log("clicked")}
          />

          {/* Typescript */}

          <Button
            label={"Typescript"}
            type={"tech-stack-btn"}
            varient={"ts"}
            onClick={() => console.log("clicked")}
          />

          {/* Express */}

          <Button
            label={"Express.js"}
            type={"tech-stack-btn"}
            varient={"express"}
            onClick={() => console.log("clicked")}
          />

          {/* Redux */}
          <Button
            label={"Redux"}
            type={"tech-stack-btn"}
            varient={"redux"}
            onClick={() => console.log("clicked")}
          />
        </div>
        {/* row 3 */}
        <div className="flex items-center justify-center gap-x-10 gap-y-6 flex-wrap md:mt-8 mt-6">
          {/* Mongo */}

          <Button
            label={"MongoDB"}
            type={"tech-stack-btn"}
            varient={"mongo"}
            onClick={() => console.log("clicked")}
          />

          {/* git */}

          <Button
            label={"Git"}
            type={"tech-stack-btn"}
            varient={"git"}
            onClick={() => console.log("clicked")}
          />

          {/* Tailwind */}
          <div className="hidden sm:block">
            <Button
              label={"Tailwind"}
              type={"tech-stack-btn"}
              varient={"tailwind"}
              onClick={() => console.log("clicked")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
