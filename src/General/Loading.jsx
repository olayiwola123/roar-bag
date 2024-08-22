import React from "react";
import AnimatedLoader from "../../public/Loading-hca.json";
import Lottie from "lottie-react";


const Loading = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-[9999] h-[100vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100 flex justify-center items-center">
      <Lottie
        animationData={AnimatedLoader}
        className={"w-[300px] max-md:w-[200px]"}
        loop={true}
      />
    </div>
  );
};

export default Loading;
