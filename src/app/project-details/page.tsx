"use client";

import React, { useState } from "react";

export default function ProjectDetails() {
  const [viewDetails, setViewDetails] = useState(false);

  return (
    <div className="flex items-center justify-around my-20">
      <div></div>
      <div className="max-w-[40dvw]">
        <h1 className="text-2xl lg:text-3xl font-bold leading-tight mb-[-30px]">
          <span className=" text-teal-400">Use Popcorn </span>Movie Review
          website
        </h1>
        <div className="flex flex-col ">
          <p
            className={`text-lg text-gray-400 mt-10 mb-1 ${
              viewDetails === false ? "line-clamp-2" : ""
            }`}
          >
            Eco-Adventure Experiences is a travel blog designed to inspire and
            guide adventure enthusiasts in exploring eco-friendly travel
            destinations. The platform provides detailed information on various
            adventure spots, including activities, accommodations, and
            eco-friendly practices. By promoting sustainable travel,
            Eco-Adventure Experiences aims to encourage responsible tourism and
            environmental conservation.
          </p>
          <button
            onClick={() => setViewDetails(!viewDetails)}
            className="py-1 px-2 text-sm font-medium text-white rounded-md bg-teal-500  hover:bg-teal-600 self-end"
          >
            {viewDetails === false ? "see more..." : "see less..."}
          </button>
        </div>
      </div>
    </div>
  );
}
