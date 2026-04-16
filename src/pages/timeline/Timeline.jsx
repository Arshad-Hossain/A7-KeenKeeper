import React, { useContext, useState } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import { useParams } from "react-router";
import { TiTickOutline } from "react-icons/ti";
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";
import { toast } from "react-toastify";

const Timeline = () => {
  const { id } = useParams();
  console.log(id, "id");
  const { timelineData } = useContext(TimelineContext);

  // const { interactionType, friend, date } = timelineData;
  // const { name, age } = useContext(TimelineContext);
  // console.log(name, age);

  const [selected, setSelected] = useState();
  const [filteredData, setFilteredData] = useState(timelineData);

  const handleSelect = (type) => {
    document.getElementById("popover-1")?.hidePopover();

    // setSelected(text);
    // document.getElementById("popover-1")?.hidePopover();
    // const filteredTimelineData = timelineData.filter(
    //   (item) => item.interactionType === text,
    // );
    // setFilteredData(filteredTimelineData);

    if (type === selected) {
      setSelected("");
      setFilteredData(timelineData);

      return;
    }

    setSelected(type);
    setFilteredData(
      timelineData.filter((item) => item.interactionType === type),
    );
  };

  if (timelineData.length === 0) {
    return <h2 className="text-center pb-50">Sorry, no timeline data found</h2>;
  }

  return (
    <div className="bg[#f8fafc]">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Timeline</h1>
        <br />

        {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
        {/* For TSX uncomment the commented types below */}
        <button
          className="btn mb-10"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
        >
          {selected ? selected : "Filter timeline"}
          <TiTickOutline></TiTickOutline>
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
        >
          <li onClick={() => handleSelect("text")}>
            <a>Text {selected === "text" && <TiTickOutline></TiTickOutline>}</a>
          </li>
          <li onClick={() => handleSelect("call")}>
            <a>Call {selected === "call" && <TiTickOutline></TiTickOutline>}</a>
          </li>
          <li onClick={() => handleSelect("video")}>
            <a>
              Video {selected === "video" && <TiTickOutline></TiTickOutline>}
            </a>
          </li>
        </ul>

        {filteredData.map((item, index) => (
          <div key={index}>
            {item.interactionType === "call" && (
              <div className="flex gap-2 m-10 w-full bg-[#ffffff] shadow p-2">
                <img src={callImg} />
                <div>
                  <p>Call with {item.friend.name}</p>
                  <p> {item.date}</p>
                </div>
              </div>
            )}

            {item.interactionType === "text" && (
              <div className="flex gap-2 m-10 w-full bg-[#ffffff] shadow p-2">
                <img src={textImg} />
                <div>
                  <p>Text with {item.friend.name}</p>
                  <p> {item.date}</p>
                </div>
              </div>
            )}

            {item.interactionType === "video" && (
              <div className="flex gap-2 m-10 w-full bg-[#ffffff] shadow p-2">
                <img src={videoImg} />
                <div>
                  <p>Video with {item.friend.name}</p>
                  <p> {item.date}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// };

export default Timeline;
