import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] bg-[url('/hero-background.png')] bg-cover relative flex justify-start items-center">
      <div className=" absolute bg-black w-full h-full opacity-[0.4]"></div>
      <div className="flex flex-col z-[10] gap-y-11 px-[80px]">
        <span className="text-[10px] uppercase font-thin tracking-[5px]">
          Inside Innovation
        </span>
        <div className="text-[55px] font-semibold leading-tight tracking-tight">
          Interior design <br /> that matters.
        </div>
        <div className="hover:cursor-pointer w-[300px] h-[50px] text-sm font-thin uppercase tracking-[3px] rounded-full border border-[#ffffff8d] flex justify-center items-center hover:backdrop-blur-lg transition-all ease-in-out duration-500 text-[#ffffffca] hover:text-white">
          Schedule a Call
        </div>
      </div>
      <div className="absolute w-[430px] bg-white flex bottom-0 h-28 gap-x-2">
        <div className="w-[70px] h-full bg-[#b7d8f0]"></div>
        <div className="flex flex-col flex-1  justify-center gap-y-2">
          <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500">
            Dimpu Baruah's
          </span>
          <span className="text-[18px] font-extrabold tracking-[0px] text-gray-800">
            Room Editing Service
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
