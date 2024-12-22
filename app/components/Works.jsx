import React from "react";

const Works = () => {
  return (
    <div className="w-screen h-screen bg-white px-[80px] pt-[80px] flex flex-col items-center">
      <div className="h-[60%] w-full bg-[url('/bg-4.png')] flex justify-center items-center flex-col gap-y-5">
        <span className="text-[10px] uppercase font-thin tracking-[5px] text-white">
          expolore our works
        </span>
        <h3 className="text-4xl">See what can we do together.</h3>
        <div className="hover:cursor-pointer px-3 h-[50px] text-[10px] uppercase font-thin tracking-[5px] text-white rounded-full border border-[#ffffff8d] flex justify-center items-center hover:backdrop-blur-lg transition-all ease-in-out duration-500 text-[#ffffffca] hover:text-white">
          View all projects
        </div>
      </div>
      <div className="h-[130px] w-4/5 bg-[#F3F6FC] flex justify-evenly items-center">
        {["Space planning", "Custom Furniture", "Furniture layouts"]?.map(
          (item, index) => (
            <span
              key={index}
              className="text-[10px] uppercase font-thin tracking-[5px] text-[#090B19]"
            >
              {item}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default Works;
