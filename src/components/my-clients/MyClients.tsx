import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { testimonials } from "@/data/testimonials";

const MyClients = () => {
  return (
    <div className="pb-32 md:mb-0 mt-4 md:mt-0 md:my-16">
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-[-30px] text-center animate__animated animate__fadeInUp animate__slow">
        Kind Words from{" "}
        <span className=" text-teal-400">Satisfied Clients</span>
      </h1>

      <div className=" flex flex-col items-center">
        <div className="mt-20 h-[25vh] md:h-[20rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default MyClients;
