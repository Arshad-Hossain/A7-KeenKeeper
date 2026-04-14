import React, { useEffect, useState } from "react";

const YourFriends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setFriends(data);
      // console.log(friends, "friends");
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#f8fafc] ">
      <div className="container mx-auto flex flex-col items-center gap-2 md:flex-row lg:flex-row justify-around mb-10">
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
      <div className="container mx-auto max-w-7/10 mt-5">
        <h1 className="font-semibold">Your Friends</h1> <br />
        <div className=" grid grid-cols-4">
          {friends.map((friend, id) => {
            return (
              <div key={id}>
                <img src={friend.picture} className="rounded-full w-[25%]" />
                <h1>{friend.name}</h1>
                <p>62d ago</p>
                <p>work</p>
                <p>Almost Due</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YourFriends;
