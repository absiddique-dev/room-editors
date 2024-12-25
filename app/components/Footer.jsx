import React from "react";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white px-[80px] py-12 min-h-[80vh]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Logo and About Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Room Editors</h1>
          <div className="space-y-4">
            <h2 className="text-lg">About us</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mauris accumsan urna eu pharetra elementum. Suspendisse
              potenti.Vestibulum ut quam luctus, pharetra dui sed, rutrum felis.
              Vestibulum tellus ipsum, rhoncus sed suscipit a, eleifend in.
              Vestibulum ut quam luctus, pharetra dui sed, rutrum felis.
            </p>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="space-y-6 mt-[100px] flex flex-col">
          <h2 className="text-sm tracking-wider text-gray-400 text-center">
            NAVIGATION
          </h2>
          <nav className="space-y-6 flex flex-col items-center">
            <div className="flex flex-col gap-y-8">
              {["teams", "projects", "services", "news", "contact"]?.map(
                (item, index) => (
                  <span
                    key={index}
                    className="text-[10px] uppercase font-thin tracking-[5px] text-gray-300"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </nav>
        </div>

        {/* Social Media Section */}
        <div className="space-y-6 mt-[180px]">
          <h2 className="text-sm tracking-wider text-gray-400">FOLLOW US</h2>
          <div className="space-y-6 text-gray-400">
            <a href="#" className="flex items-center gap-3 hover:text-gray-300">
              <Instagram size={20} className="text-gray-400" />
              <span className="text-sm font-thin">@room.editors</span>
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-gray-300">
              <Facebook size={20} className="text-gray-400" />
              <span className="text-sm font-thin">@room.editors</span>
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-gray-300">
              <Linkedin size={20} className="text-gray-400" />
              <span className="text-sm font-thin">@room.editors</span>
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-gray-300">
              <Youtube size={20} className="text-gray-400" />
              <span className="text-sm font-thin">@room.editors</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex items-center justify-between mt-16">
        <div className="text-sm text-gray-300 mx-0 mr-0">
          © 2025 ROOM EDITORS. All rights reserved.
        </div>
        <Link className="text-gray-300 text-sm" href={"redrosesid.in"}>
          Made with ❤️ by Redrose Sid
        </Link>
      </div>
    </div>
  );
};

export default Footer;
