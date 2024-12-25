import React from "react";

const OurTeam = () => {
  return (
    <>
      <div className="w-full bg-white pb-16">
        <div className="flex justify-center flex-col items-center">
          <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500">
            Our team
          </span>
          <h1 className="text-3xl font-bold text-gray-800">
            Behind the camera
          </h1>
          <div className="flex flex-wrap justify-center gap-5 mt-11">
            {[1, 1, 1]?.map((item, index) => (
              <div
                key={index}
                className="aspect-square w-[350px] object-cover rounded overflow-hidden"
              >
                <img src="/kingkar.png" alt="team" className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[url('/bg-blank.png')] bg-cover w-full h-[60vh] flex justify-center items-center">
        <h1 className="capitalize tracking-wider text-xl">
          We develop{" "}
          <span className="font-semibold text-yellow-300">emotion</span>, not
          only <span className="font-semibold text-red-500">Interior</span>
        </h1>
      </div>
    </>
  );
};

export default OurTeam;
