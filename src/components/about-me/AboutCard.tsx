import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaUniversity } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { SiSemanticscholar } from "react-icons/si";

interface AboutCardProps {
  img: string | StaticImageData;
  title: string;
  institute: string;
  desc1: string;
  desc2: string;
  id: number;
}

const AboutCard: React.FC<AboutCardProps> = ({
  img,
  title,
  institute,
  desc1,
  desc2,
  id,
}) => {
  return (
    <div
      className="md:col-span-2 flex flex-col sm:flex-row justify-between items-start gap-y-2 sm:items-start  p-6 animate__animated animate__fadeInUp animate__slow h-[500px] sm:h-[300px]"
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Image
        src={img}
        alt="img"
        objectFit="cover"
        width={400}
        height={100}
        className="w-[320px] sm:w-[300px] md:w-[280px] xl:w-[400px] h-[250px] rounded-lg border-2 border-teal-400"
      />

      <div
        className={`flex flex-col items-start space-y-2  sm:ml-10 md:w-[350px]`}
      >
        <h3 className="text-xl font-bold text-neutral-200">{title}</h3>
        <div className="flex flex-col gap-y-4 pt-4">
          <div className="flex items-start gap-x-4 text-neutral-400">
            <FaUniversity className="text-2xl text-teal-400" />
            <p className="text-lg text-neutral-400">{institute}</p>
          </div>
          <div className="flex items-start gap-x-4 text-neutral-400">
            <FaGoogleScholar className="text-2xl text-teal-400" />
            <p className="text-lg text-neutral-400">{desc1}</p>
          </div>
          {id === 1 && (
            <div className="hidden lg:flex items-start gap-x-4 text-neutral-400">
              <SiSemanticscholar className="text-2xl text-teal-400" />
              <p className="text-lg text-neutral-400">{desc2}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
