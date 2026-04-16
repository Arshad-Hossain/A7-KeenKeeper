import React from "react";
import { Link } from "react-router";

const Friend = ({ friend }) => {
  return (
    <Link
      to={`/${friend.id}`}
      className="bg-[#ffffff] flex flex-col items-center p-4 sm:p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition"
    >
      <img
        src={friend.picture}
        className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover"
      />
      <h1 className="font-bold mt-3 text-sm sm:text-base md:text-lg text-center">
        {friend.name}
      </h1>
      <p className="text-xs sm:text-sm text-gray-500">62d ago</p>
      <p className=" flex gap-2 mb-2">
        <span className="bg-[#cbfadb] rounded-md text-xs p-0.5">
          {friend.tags?.[0]}
        </span>
        <span className="bg-[#cbfadb] rounded-md text-xs ">
          {friend.tags?.[1]}
        </span>
      </p>
      <p
        className={`px-3 py-1 rounded-full text-white text-[10px] sm:text-xs md:text-sm  ${
          friend.status === "Overdue"
            ? "bg-red-500"
            : friend.status === "On track"
              ? "bg-[#244d3f]"
              : friend.status === "Amount Due"
                ? "bg-yellow-500"
                : "bg-gray-500"
        }`}
      >
        {friend.status}
      </p>
    </Link>
  );
};

export default Friend;
