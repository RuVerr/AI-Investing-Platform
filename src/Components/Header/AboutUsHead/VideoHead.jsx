import React from "react";
import headVideo from "../../../images/headerBackgroundImages/backgif3.mp4";

import "./videoHead.scss";
import "./videoHeadMedia.scss";

const VideoHead = () => {
  return (
    <header className="videoContent">
      <video muted autoPlay loop width={"1440"}>
        <source src={headVideo} type="video/mp4" />
      </video>
    </header>
  );
};

export default VideoHead;
