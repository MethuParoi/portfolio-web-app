import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Loader from "@/components/ui/Loader/Loader";

const Slider = ({ imgSlides }) => {
  const [page, setPage] = useState(0);
  const [mobilePage, setMobilePage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const displayedSlides = imgSlides?.split(",").map((slide) => slide.trim());
  // console.log("displayedSlides", displayedSlides[0]);

  useEffect(() => {
    const int = setInterval(() => {
      setPage((prev) => (prev + 1 >= 3 ? 0 : prev + 1));
      setMobilePage((prev) => (prev + 1 >= 3 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(int);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevPage = () => {
    setPage((prev) => (prev - 1 < 0 ? 2 : prev - 1));
    setMobilePage((prev) => (prev - 1 < 0 ? 2 : prev - 1));
  };

  const handleNextPage = () => {
    setPage((prev) => (prev + 1 >= 3 ? 0 : prev + 1));
    setMobilePage((prev) => (prev + 1 >= 3 ? 0 : prev + 1));
  };
  if (!displayedSlides || displayedSlides.length === 0) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <section className=" grid lg:grid-rows-5">
      <div className="lg:row-span-3">
        <div className="relative h-[25rem] w-full ">
          {" "}
          {/* Adjust mobile height */}
          {/* Desktop */}
          {/* <link rel="preload" as="image" href={displayedSlides[0].src} /> */}
          <div className="hidden md:block">
            <Image
              src={displayedSlides[page]}
              alt={`Slide ${page + 1}`}
              fill={true}
              objectFit="cover" // Ensure full cover to fill container
              className="absolute inset-0 rounded-lg"
              loading="lazy"
              unoptimized={true}
              sizes="(max-width: 600px ) max-height: 500px"
            />
            <div
              onClick={handlePrevPage}
              className="z-10 absolute bottom-1/2 -left-5 md:left-10" // Adjust position for better visibility
            >
              <button className="bg-gray-800 bg-opacity-60 text-white p-3 rounded-full flex justify-center items-center">
                <FaAngleLeft size={20} />
              </button>
            </div>

            <div
              onClick={handleNextPage}
              className="z-10 absolute bottom-1/2 -right-5 md:right-10" // Adjust position for better visibility
            >
              <button className="bg-gray-800 bg-opacity-60 text-white p-3 rounded-full flex justify-center items-center">
                <FaAngleRight size={20} />
              </button>
            </div>
          </div>
          {/* for mobile device */}
          {/* <link rel="preload" as="image" href={displayedSlides[0].src} /> */}
          <div className="block w-full md:hidden">
            <Image
              src={displayedSlides[page]}
              alt={`Slide ${mobilePage + 1}`}
              fill={true}
              objectFit="cover" // Make sure the image fills the mobile screen without cropping
              className=" inset-0 rounded-lg h-[250px]"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw, height: 350px"
            />
            <div
              onClick={handlePrevPage}
              className="z-10 absolute bottom-1/2 left-4" // Adjust button position for mobile
            >
              <button className="bg-gray-800 bg-opacity-60 text-white p-2 rounded-full flex justify-center items-center">
                <FaAngleLeft size={13} />
              </button>
            </div>

            <div
              onClick={handleNextPage}
              className="z-10 absolute bottom-1/2 right-4" // Adjust button position for mobile
            >
              <button className="bg-gray-800 bg-opacity-60 text-white p-2 rounded-full flex justify-center items-center">
                <FaAngleRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
