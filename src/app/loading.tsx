import Loader from "../components/ui/Loader/Loader";
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2">
      <Loader />
    </div>
  );
};

export default Loading;
