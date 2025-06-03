import React from "react";

const VideoSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <video
        className="w-full aspect-video rounded-lg shadow-2xl"
        controls
        autoPlay
        muted
        loop
        src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
      >
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
    </div>
  );
};

export default VideoSection;
