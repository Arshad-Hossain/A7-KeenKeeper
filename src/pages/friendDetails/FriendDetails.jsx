import React from "react";
import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";

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
      <div className="container mx-auto grid grid-cols-2 py-10">
        {/* left-side  */}
        <aside>
          <div className="bg-[#ffffff] shadow-xs w-[40%] rounded-md flex flex-col items-center p-5 mb-5">
            <img
              src={expectedFriend.picture}
              className="rounded-full h-25 w-25"
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
            <button className="bg-[#ffffff] w-[40%] font-semibold py-1">
              Snooze 2 Weeks
            </button>
            <button className="bg-[#ffffff] w-[40%] font-semibold py-1">
              Archive
            </button>
            <button className="bg-[#ffffff] w-[40%] font-semibold py-1">
              Delete
            </button>
          </div>
        </aside>

        {/* right-side */}
        {/* top-part  */}
        <div>
          <div>
            <p>{expectedFriend.days_since_contact}</p>
            <p>Days Since Contact</p>
          </div>
          <div>
            <p>{expectedFriend.goal}</p>
            <p>Goal(Days)</p>
          </div>
          <div>
            <p>{expectedFriend.next_due_date}</p>
            <p>Next Due</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
