import React from "react";

import { IoHomeOutline } from "react-icons/io5";
import { PiChartLine } from "react-icons/pi";
import { RiTimeLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-15 p-4 bg-[#ffffff]">
      <h1 className="font-bold">
        Keen<span className="text-[#244d3f]">Keeper</span>
      </h1>

      <ul className="flex justify-between gap-5">
        <li className="flex items-center bg-[#244d3f] text-white p-1">
          <IoHomeOutline></IoHomeOutline>Home
        </li>
        <li className="flex items-center">
          <RiTimeLine></RiTimeLine> Timeline
        </li>
        <li className="flex items-center">
          <PiChartLine></PiChartLine> Stats
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
