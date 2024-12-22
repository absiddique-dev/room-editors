import { Play } from "lucide-react";

export default function About() {
  return (
    <section className="relative h-[100vh] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full opacity-[0.5]"
        style={{
          backgroundImage: "url('/background-banner.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content Overlay */}
      <div className="relative h-full w-full px-20 flex flex-col justify-center gap-y-[40px]">
        {/* Small Header */}
        <span className="text-[10px] uppercase font-thin tracking-[5px] text-white">
          About us
        </span>

        {/* Main Content */}
        <div className="max-w-xl">
          <h1 className="text-3xl font-normal leading-tight text-white mb-8">
            We're innovating the way companies reinvent their office spaces for
            the remote workforce.
          </h1>

          {/* CEO Name */}
          <div className="flex items-center">
            <div className="w-1 h-4 bg-white mr-4" />
            <span className="text-white text-sm tracking-wider">
              Dimpu Baruah, CEO
            </span>
          </div>
        </div>

        {/* Play Button */}
        <button className="bottom-16 left-20 w-16 h-16 border border-white rounded-full flex items-center justify-center transition-all ease-in-out duration-500 hover:cursor-pointer hover:bg-gradient-to-br hover:from-[#FCA623] hover:via-[#FB269D] hover:to-[#36EDFA] hover:border-[#837a7a]">
          <Play
            size={24}
            className="text-white ml-1 group-hover:animate-pulse hover:scale-125 transition-all ease-in-out duration-500"
          />
        </button>
      </div>
    </section>
  );
}
