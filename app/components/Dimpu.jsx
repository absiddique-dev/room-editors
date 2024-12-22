import React from "react";

const Dimpu = () => {
  return (
    <div className="h-[80vh] bg-white flex items-center">
      <div className="w-full h-[60vh] bg-[#090B19] px-[80px] grid grid-cols-3 justify-center items-center gap-x-3">
        <div className="w-full aspect-square bg-[url('/dimpu.png')] bg-cover rounded-xl"></div>
        <div className="flex-1 h-full flex flex-col justify-center gap-y-3 col-span-2">
          <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500">
            Words from
          </span>
          <h1 className="text-3xl font-bold">Dimpu Baruah</h1>
          <div className="mt-3 flex flex-col gap-y-3">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              maxime sapiente aut nulla, perspiciatis quibusdam? Eveniet.
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis ipsam commodi architecto dicta ex, aut dolorem
              voluptatibus, recusandae temporibus doloremque voluptates
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dimpu;
