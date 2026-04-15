import React, { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import { useParams } from "react-router";

const Timeline = () => {
  const { id } = useParams();
  console.log(id, "id");
  const { timelineData } = useContext(TimelineContext);
  const { interactionType, friend, date } = timelineData;
  // const { name, age } = useContext(TimelineContext);
  // console.log(name, age);

  if (!timelineData) {
    return <h2>No timeline data found</h2>;
  }
  return (
    <div>
      <h1>Timeline</h1>
      <br />

      {timelineData.map((item, index) => (
        <div key={index}>
          {item.interactionType === "call" && (
            <h1>
              Call with {item.friend.name} on {item.date}
            </h1>
          )}

          {item.interactionType === "text" && (
            <h1>
              Text with {item.friend.name} on {item.date}
            </h1>
          )}

          {item.interactionType === "video" && (
            <h1>
              {" "}
              Video with {item.friend.name} on {item.date}
            </h1>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
