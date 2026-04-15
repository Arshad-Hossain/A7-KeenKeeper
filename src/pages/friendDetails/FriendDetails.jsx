import React from "react";
import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";
import { HiOutlineArchiveBox, HiOutlineBellSnooze } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";
const FriendDetails = () => {
  const { id } = useParams();
  console.log(id, "params");

  const { friends, loading } = useFriends();

  const expectedFriend = friends.find((friend) => friend.id === Number(id));
  console.log(expectedFriend, "expectedFriend");

  if (loading) {
    return <h2>Please wait, data is loading...</h2>;
  }

  return (
    <div className="bg-[#f8fafc] mb-50">
      <div className="container mx-auto  grid grid-cols-12 gap-6  py-10 ">
        {/* left-side/sidebar  */}
        <aside className="col-span-4">
          <div className="bg-[#ffffff] shadow-xs w-auto rounded-md flex flex-col items-center p-5 mb-5">
            <img
              src={expectedFriend.picture}
              className="rounded-full h-25 w-auto"
            />
            <h1 className="font-bold">{expectedFriend.name}</h1>
            <p className=" flex gap-2 mb-2">
              <span className="bg-[#cbfadb] rounded-md text-xs p-0.5">
                {expectedFriend.tags?.[0]}
              </span>
              <span className="bg-[#cbfadb] rounded-md text-xs ">
                {expectedFriend.tags?.[1]}
              </span>
            </p>
            <p>"{expectedFriend.bio}"</p>
            <p>Preferred: email</p>
          </div>

          <div className="flex flex-col gap-3">
            <button className="bg-[#ffffff] w-full font-semibold py-1 flex items-center justify-center gap-2">
              <HiOutlineBellSnooze></HiOutlineBellSnooze>
              Snooze 2 Weeks
            </button>
            <button className="bg-[#ffffff] w-full font-semibold py-1 flex items-center justify-center gap-2">
              <HiOutlineArchiveBox></HiOutlineArchiveBox>
              Archive
            </button>
            <button className="bg-[#ffffff] text-red-500 w-full font-semibold py-1 flex items-center justify-center gap-2">
              <MdDeleteOutline></MdDeleteOutline>
              Delete
            </button>
          </div>
        </aside>

        {/* right-side */}

        <div className="col-span-8">
          {/* top-part  */}
          <div className="flex gap-10">
            <div className="bg-[#ffffff] shadow-lg h-25 w-full  p-5 text-center">
              <p className="text-[#244d3f] font-bold">
                {expectedFriend.days_since_contact}
              </p>
              <p>Days Since Contact</p>
            </div>
            <div className="bg-[#ffffff] shadow-lg h-25 w-full p-5 text-center">
              <p className="text-[#244d3f] font-bold">{expectedFriend.goal}</p>
              <p>Goal(Days)</p>
            </div>
            <div className="bg-[#ffffff] shadow-lg h-25 w-full p-5 text-center">
              <p className="text-[#244d3f] font-bold">
                {expectedFriend.next_due_date}
              </p>
              <p>Next Due</p>
            </div>
          </div>
          {/* middle-part  */}
          <div className="bg-[#ffffff] shadow-lg my-5 p-5 w-full">
            <div className="flex justify-between">
              <h1 className="text-[#244d3f] font-semibold">
                Relationship Goal
              </h1>
              <button>Edit</button>
            </div>
            <br />
            <p>Connect every 30 days</p>
          </div>

          {/* last-part  */}

          <div className="bg-[#ffffff] shadow-lg w-full p-5">
            <h1 className="text-[#244d3f] font-semibold">Quick Check-In</h1>
            <div className="flex justify-around mt-5 text-center">
              <div className="bg-[#f8fafc] shadow-md h-25 w-50 flex flex-col items-center justify-center ">
                <img src={callImg} />
                <p>Call</p>
              </div>
              <div className="bg-[#f8fafc] shadow-md h-25 w-50 flex flex-col items-center justify-center">
                <img src={textImg} />
                <p>Text</p>
              </div>
              <div className="bg-[#f8fafc] shadow-md h-25 w-50 flex flex-col items-center justify-center">
                <img src={videoImg} />
                <p>video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
