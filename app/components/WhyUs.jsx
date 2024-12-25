import React from "react";

const WhyUs = () => {
  return (
    <div className="w-full bg-white px-[80px] py-11">
      <div className="grid grid-cols-3">
        <div className="w-full"></div>
        <div className="flex justify-center flex-col items-start py-11 col-span-2 gap-y-2">
          <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500">
            Recent projects
          </span>
          <h1 className="text-3xl font-bold text-gray-800">Why choose us ?</h1>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="w-full h-[400px] px-3">
          <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500 pb-5">
            popular categories
          </span>
          <div className="flex flex-col gap-y-3 mt-5">
            {[
              "Furniture",
              "Remote Spaces",
              "Office Tech",
              "Floor Plans",
              "Interior",
            ]?.map((item, index) => (
              <span
                key={index}
                className="text-xs capitalize font-thin text-gray-500 pb-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-full flex flex-col">
            <div className="relative w-full aspect-video">
              <img
                src="/bg-3.png"
                alt="product-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 space-y-3 border-s">
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold text-gray-800">
                  Interior Design
                </h1>
                <span className="text-xs text-gray-600 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora odio
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500">
                  Interior
                </span>
                <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500">
                  12 DEC 2024
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="relative w-full aspect-video">
              <img
                src="/bg-3.png"
                alt="product-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 space-y-3 border-s">
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold text-gray-800">
                  Interior Design
                </h1>
                <span className="text-xs text-gray-600 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora odio
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500">
                  Interior
                </span>
                <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500">
                  12 DEC 2024
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col border-b">
            <div className="relative w-full aspect-video">
              <img
                src="/bg-3.png"
                alt="product-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 space-y-3 border-s">
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold text-gray-800">
                  Interior Design
                </h1>
                <span className="text-xs text-gray-600 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora odio
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500">
                  Interior
                </span>
                <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500">
                  12 DEC 2024
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-12">
          <div className="w-full flex flex-col">
            <div className="relative w-full aspect-video">
              <img
                src="/bg-3.png"
                alt="product-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 space-y-3 border-s border-e">
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold text-gray-800">
                  Interior Design
                </h1>
                <span className="text-xs text-gray-600 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora odio
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500">
                  Interior
                </span>
                <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500">
                  12 DEC 2024
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="relative w-full aspect-video">
              <img
                src="/bg-3.png"
                alt="product-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 space-y-3 border-s border-e">
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold text-gray-800">
                  Interior Design
                </h1>
                <span className="text-xs text-gray-600 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora odio
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500">
                  Interior
                </span>
                <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500">
                  12 DEC 2024
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="relative w-full aspect-video">
              <img
                src="/bg-3.png"
                alt="product-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 space-y-3 border-s border-e border-b">
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold text-gray-800">
                  Interior Design
                </h1>
                <span className="text-xs text-gray-600 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora odio
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500">
                  Interior
                </span>
                <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500">
                  12 DEC 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
