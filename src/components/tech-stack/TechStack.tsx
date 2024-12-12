import { FaReact } from "react-icons/fa";
import Button from "../ui/Button";
import "animate.css";

const TechStack = () => {
  return (
    <div className="mb-14 mt-4 md:my-14 ">
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-[-30px] text-center animate__animated animate__fadeInUp animate__slow">
        My <span className=" text-teal-400">Tech Stack</span>
      </h1>
      {/* tech stacks */}
      <div className="flex flex-col items-center mt-20 ">
        {/* row 1 */}
        <div className="flex items-center justify-center gap-x-10 gap-y-6 flex-wrap">
          {/* React */}

          <Button label={"React"} type={"tech-stack-btn"} varient={"react"} />

          {/* Javascript */}

          <Button label={"Javascript"} type={"tech-stack-btn"} varient={"js"} />

          {/* Next */}

          <Button label={"Next.js"} type={"tech-stack-btn"} varient={"next"} />

          <div className="sm:hidden">
            <Button label={"Redux"} type={"tech-stack-btn"} varient={"redux"} />
          </div>
        </div>
        {/* row 2 */}
        <div className="flex items-center justify-center gap-x-10 gap-y-6 flex-wrap md:mt-8 mt-6">
          {/* Node */}

          <Button label={"Node.js"} type={"tech-stack-btn"} varient={"node"} />

          {/* Typescript */}

          <Button label={"Typescript"} type={"tech-stack-btn"} varient={"ts"} />

          {/* Express */}

          <Button
            label={"Express.js"}
            type={"tech-stack-btn"}
            varient={"express"}
          />

          {/* Redux */}
          <Button label={"Redux"} type={"tech-stack-btn"} varient={"redux"} />
        </div>
        {/* row 3 */}
        <div className="flex items-center justify-center gap-x-10 gap-y-6 flex-wrap md:mt-8 mt-6">
          {/* Mongo */}

          <Button label={"MongoDB"} type={"tech-stack-btn"} varient={"mongo"} />

          {/* git */}

          <Button label={"Git"} type={"tech-stack-btn"} varient={"git"} />

          {/* Tailwind */}
          <div className="hidden sm:block">
            <Button
              label={"Tailwind"}
              type={"tech-stack-btn"}
              varient={"tailwind"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
