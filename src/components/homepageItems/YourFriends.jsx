import React, { useEffect } from "react";

const YourFriends = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#f8fafc] ">
      <div className="container mx-auto flex justify-around mb-10">
        <div className="bg-[#ffffff] h-30 w-60 flex flex-col justify-center items-center">
          <p className="text-[#244d3f] font-bold">10</p>
          <p>Total Friends</p>
        </div>
        <div className="bg-[#ffffff] h-30 w-60 flex flex-col justify-center items-center">
          <p className="text-[#244d3f] font-bold">3</p>
          <p>On Track</p>
        </div>
        <div className="bg-[#ffffff] h-30 w-60 flex flex-col justify-center items-center">
          <p className="text-[#244d3f] font-bold">6</p>
          <p>Need Attention</p>
        </div>
        <div className="bg-[#ffffff] h-30 w-60 flex flex-col justify-center items-center">
          <p className="text-[#244d3f] font-bold">12</p>
          <p>Interactions This Month</p>
        </div>
      </div>
      <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25" />
      <div className="container mx-auto mt-5">
        <h1 className="font-semibold">Your Friends</h1> <br />
        <div></div>
      </div>
    </div>
  );
};

export default YourFriends;
