import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";
const Nav = () => {
  return (
    <div className=" absolute w-full h-[120px] bg-[#ffffff00] flex items-center justify-between px-[80px] z-[10]">
      <div className="flex gap-x-2 items-center  p-2 rounded">
        <img
          src="/logo/room-editors.png"
          alt="logo"
          className="w-[55px] aspect-square rounded-full"
        />
        {/* <h1 className="text-4xl">ROOM EDITORS</h1> */}
      </div>
      <div className="capitalize flex gap-x-11 items-center">
        <Link href={"#"} className="font-thin tracking-[5px] text-sm">
          SERVICES
        </Link>
        <Link href={"#"} className="font-thin tracking-[5px] text-sm">
          PROJECTS
        </Link>
        <Link href={"#"} className="font-thin tracking-[5px] text-sm">
          CONTACTS
        </Link>
        <Menu />
      </div>
    </div>
  );
};

export default Nav;
