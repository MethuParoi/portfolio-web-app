import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { testimonials } from "@/data/testimonials";

const MyContributions = () => {
  return (
    <div className="pb-20 md:mb-0 md:mt-0 md:my-16 pt-8">
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-[-30px] text-center animate__animated animate__fadeInUp animate__slow">
        Open‑Source &{" "}
        <span className=" text-teal-400 block md:inline">
          Community Contributions
        </span>
      </h1>

      <div className=" flex flex-col items-center">
        <div className="mt-20 h-[270px] md:h-[20rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
};

export default MyContributions;
