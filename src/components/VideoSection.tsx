import React from "react";

const VideoSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <video
        className="w-full h-auto rounded-lg shadow-2xl"
        controls
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
};

export default VideoSection;
