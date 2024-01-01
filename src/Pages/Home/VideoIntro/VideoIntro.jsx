import React from "react";
import Headings from "../../../Componants/Headings";

const VideoIntro = () => {
  return (
    <div className="m-auto">
        <Headings
        heading={"What's the best martial arts for you?"}
      ></Headings>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/6uP0q7uEU6w?si=pYmlnVWKni7b6pSn" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="m-auto h-screen"></iframe>
    </div>
  );
};

export default VideoIntro;
