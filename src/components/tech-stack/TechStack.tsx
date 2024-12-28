"use client";

import Button from "../ui/Button";
import LazyLoad from "react-lazyload";
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
          <LazyLoad height={200} debounce={50} once>
            <Button
              label={"React"}
              type={"tech-stack-btn"}
              varient={"react"}
              onClick={() => {}}
            />
          </LazyLoad>

          {/* Javascript */}
          <LazyLoad height={200} debounce={50} once>
            <Button
              label={"Javascript"}
              type={"tech-stack-btn"}
              varient={"js"}
              onClick={() => {}}
            />
          </LazyLoad>

          {/* Next */}
          <LazyLoad height={200} debounce={50} once>
            <Button
              label={"Next.js"}
              type={"tech-stack-btn"}
              varient={"next"}
              onClick={() => {}}
            />
          </LazyLoad>
          {/* redux */}
          <LazyLoad height={200} debounce={50} once>
            <div className="sm:hidden">
              <Button
                label={"Redux"}
                type={"tech-stack-btn"}
                varient={"redux"}
                onClick={() => {}}
              />
            </div>
          </LazyLoad>
        </div>
        {/* row 2 */}
        <div className="flex items-center justify-center gap-x-10 gap-y-6 flex-wrap md:mt-8 mt-6">
          {/* Node */}
          <LazyLoad height={200} debounce={50} once>
            <Button
              label={"Node.js"}
              type={"tech-stack-btn"}
              varient={"node"}
              onClick={() => {}}
            />
          </LazyLoad>

          {/* Typescript */}
          <LazyLoad height={200} debounce={50} once>
            <Button
              label={"Typescript"}
              type={"tech-stack-btn"}
              varient={"ts"}
              onClick={() => {}}
            />
          </LazyLoad>

          {/* Express */}
          <LazyLoad height={200} debounce={50} once>
            <Button
              label={"Express.js"}
              type={"tech-stack-btn"}
              varient={"express"}
              onClick={() => {}}
            />
          </LazyLoad>

          {/* Redux */}
          <LazyLoad height={200} debounce={50} once>
            <Button
              label={"Redux"}
              type={"tech-stack-btn"}
              varient={"redux"}
              onClick={() => {}}
            />
          </LazyLoad>
        </div>
        {/* row 3 */}
        <div className="flex items-center justify-center gap-x-10 gap-y-6 flex-wrap md:mt-8 mt-6">
          {/* Mongo */}
          <LazyLoad height={200} debounce={50} once>
            <Button
              label={"MongoDB"}
              type={"tech-stack-btn"}
              varient={"mongo"}
              onClick={() => {}}
            />
          </LazyLoad>

          {/* git */}
          <LazyLoad height={200} debounce={50} once>
            <Button
              label={"Git"}
              type={"tech-stack-btn"}
              varient={"git"}
              onClick={() => {}}
            />
          </LazyLoad>

          {/* Tailwind */}
          <LazyLoad height={200} debounce={50} once>
            <div className="hidden sm:block">
              <Button
                label={"Tailwind"}
                type={"tech-stack-btn"}
                varient={"tailwind"}
                onClick={() => {}}
              />
            </div>
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
