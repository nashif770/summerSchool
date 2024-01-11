import React from "react";
import Headings from "../../../Componants/Headings";

const VideoIntro = () => {
  return (
    <div className="text-center m-3 p-6 rounded-md">
      <Headings
        heading={"What's the Best Martial Art for You?"}
        subHeading={
          "Explore different martial arts styles and find the one that suits you best."
        }
      />
      <div className="mx-auto max-w-screen-md mt-6">
        <iframe
          width="560"
          height="800"
          src="https://www.youtube.com/embed/6uP0q7uEU6w?si=pYmlnVWKni7b6pSn"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="rounded-lg shadow-lg h-[512px] w-[768px]"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoIntro;
