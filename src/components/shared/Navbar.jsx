import React from "react";

import { IoHomeOutline } from "react-icons/io5";
import { PiChartLine } from "react-icons/pi";
import { RiTimeLine } from "react-icons/ri";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between mx-15 p-4 bg-[#ffffff]">
      <h1 className="font-bold">
        Keen<span className="text-[#244d3f]">Keeper</span>
      </h1>

      <ul className="flex justify-between gap-5">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${isActive ? "bg-[#244d3f] text-white" : ""} flex items-center p-1`
          }
        >
          <IoHomeOutline></IoHomeOutline>Home
        </NavLink>

        <NavLink
          to={"/timeline"}
          className={({ isActive }) =>
            `${isActive ? "bg-[#244d3f] text-white" : ""} flex items-center p-1`
          }
        >
          <RiTimeLine></RiTimeLine> Timeline
        </NavLink>

        <NavLink
          to={"/stats"}
          className={({ isActive }) =>
            `${isActive ? "bg-[#244d3f] text-white" : ""} flex items-center p-1`
          }
        >
          <PiChartLine></PiChartLine> Stats
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
