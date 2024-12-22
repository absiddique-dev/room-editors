import { Layout, Sliders, Grid } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="px-20 py-16 bg-white">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <span className="text-[10px] uppercase font-thin tracking-[5px] text-gray-500 text-nowrap">
            Services
          </span>
          <h2 className="text-4xl font-extrabold mt-2 text-[#090B19] animate-fade-in hover:text-gray-800 transition-colors duration-300">
            We do it best.
          </h2>
        </div>
        <button className="text-[10px] uppercase font-thin tracking-[2px] text-nowrap bg-[#090B19] px-5 py-3 rounded-full text-[#ffffff] hover:text-[#ffffffe4] ease-in-out duration-300 transition-all">
          View All Services
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-3 gap-10 mt-16">
        {/* Card 1 */}
        <div className="flex flex-col hover:cursor-pointer items-center text-center p-8 border border-gray-100 rounded-lg  bg-white transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FCA623] via-[#FB269D] to-[#36EDFA] rounded-full group-hover:bg-white/10 transition-colors duration-500">
            <Sliders size={28} className="text-white" />
          </div>
          <h3 className="mt-6 text-lg font-semibold text-gray-800">
            Space Planning
          </h3>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            accumsan urna eu pharetra elementum.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col hover:cursor-pointer items-center text-center p-8 border border-gray-100 rounded-lg bg-white  transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FCA623] via-[#FB269D] to-[#36EDFA] rounded-full group-hover:bg-white/10 transition-colors duration-500">
            <Layout size={28} className="text-white" />
          </div>

          <h3 className="mt-6 text-lg font-semibold text-gray-800">
            Custom Furniture
          </h3>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            accumsan urna eu pharetra elementum.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col hover:cursor-pointer items-center text-center p-8 border border-gray-100 rounded-lg bg-white  transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FCA623] via-[#FB269D] to-[#36EDFA] rounded-full group-hover:bg-white/10 transition-colors duration-500">
            <Grid size={28} className="text-white" />
          </div>
          <h3 className="mt-6 text-lg font-semibold text-gray-800">
            Furniture Layouts
          </h3>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            accumsan urna eu pharetra elementum.
          </p>
        </div>
      </div>
    </section>
  );
}
