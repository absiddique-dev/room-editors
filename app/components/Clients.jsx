import React from "react";

const Clients = () => {
  return (
    <div className="w-full h-[150px] bg-white flex items-center">
      {/* Left Spacer */}
      <div className="bg-white w-[70px] h-full"></div>

      {/* Main Content */}
      <div className="bg-[#b7d8f0] h-full w-2/3 px-12 flex flex-col justify-center gap-y-4">
        {/* Header */}
        <div className="flex items-center gap-x-4">
          <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500 text-nowrap">
            Our clients
          </span>
          <div className="w-full border-b border-gray-300"></div>
        </div>

        {/* Client Logos */}
        <div className="flex justify-between items-center">
          <img
            src="/demo-clients/assam-startup.png"
            alt="client"
            className="w-[90px] opacity-80 hover:opacity-100 transition duration-300"
            style={{ mixBlendMode: "multiply" }}
          />
          <img
            src="/demo-clients/spotify.png"
            alt="client"
            className="w-[90px] opacity-80 hover:opacity-100 transition duration-300"
          />
          <img
            src="/demo-clients/assam-startup.png"
            alt="client"
            className="w-[90px] opacity-80 hover:opacity-100 transition duration-300"
            style={{ mixBlendMode: "multiply" }}
          />
          <img
            src="/demo-clients/spotify.png"
            alt="client"
            className="w-[90px] opacity-80 hover:opacity-100 transition duration-300"
          />
          <img
            src="/demo-clients/assam-startup.png"
            alt="client"
            className="w-[90px] opacity-80 hover:opacity-100 transition duration-300"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
