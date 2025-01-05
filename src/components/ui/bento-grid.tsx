import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaUniversity } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { SiSemanticscholar } from "react-icons/si";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid gap-6 max-w-7xl mx-auto",
        "grid-cols-1 lg:grid-cols-3 auto-rows-[18rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string | StaticImport;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        `rounded-lg overflow-hidden shadow-lg p-6 flex flex-col ${
          id === 1 || id === 3 ? "md:flex-row" : ""
        } justify-center  hover:shadow-xl transition-shadow duration-300 ${
          id === 2 || id === 4 ? "gap-y-2 items-center" : ""
        }`,
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="relative w-full h-[70vh] lg:h-2/3 mb-4">
        {!spareImg && (
          <Image
            src={img}
            alt={`Grid Image ${id}`}
            objectFit="cover"
            width={400}
            height={100}
            className={cn(imgClassName, "rounded-lg border-2 border-teal-400")}
          />
        )}
        {spareImg && (
          <Image
            src={spareImg}
            alt={`Grid Image ${id}`}
            width={190}
            height={50}
            className="object-cover object-center"
          />
        )}
      </div>
      <div
        className={`absolute right-0 -bottom-5 ${
          id === 5 && "w-full opacity-80"
        }`}
      >
        {spareImg && (
          <Image
            src={spareImg}
            alt={`Grid Image ${id}`}
            width={50}
            height={50}
            className="object-cover object-center"
          />
        )}
      </div>
      <div
        className={`flex flex-col items-start space-y-2 ${titleClassName} ml-10 ${
          id === 1 || id === 3 ? "xl:ml-[-100px]" : ""
        } `}
      >
        <h3 className="text-xl font-bold text-neutral-200">{title}</h3>
        {/* kiit */}
        {id === 1 && (
          <div className="flex flex-col gap-y-4 pt-4">
            <div className="flex items-center gap-x-4 text-neutral-400">
              <FaUniversity className="text-2xl text-teal-400" />
              <p className="text-lg text-neutral-400">
                KIIT, Bhubaneswar, India
              </p>
            </div>
            <div className="flex items-start gap-x-4 text-neutral-400">
              <FaGoogleScholar className="text-2xl text-teal-400" />
              <p className="text-lg text-neutral-400">
                Full Funded SII Scholarship by the Ministry of Education, India
              </p>
            </div>
            <div className="flex items-start gap-x-4 text-neutral-400">
              <SiSemanticscholar className="text-2xl text-teal-400" />
              <p className="text-lg text-neutral-400">Final Semester ongoing</p>
            </div>
          </div>
        )}
        {/* hsc */}
        {id === 3 && (
          <div className="flex flex-col gap-y-4 pt-4">
            <div className="flex items-start gap-x-4 text-neutral-400">
              <FaUniversity className="text-2xl text-teal-400" />
              <p className="text-lg text-neutral-400">
                Dhaka City College, Dhaka, Bangladesh
              </p>
            </div>
            <div className="flex items-start gap-x-4 text-neutral-400">
              <FaGoogleScholar className="text-2xl text-teal-400" />
              <p className="text-lg text-neutral-400">HSC batch of 2019</p>
            </div>
          </div>
        )}
        {description && (
          <p className="text-sm text-neutral-400">{description}</p>
        )}
      </div>
    </div>
  );
};
