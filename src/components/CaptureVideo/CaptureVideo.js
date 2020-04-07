import React, { useState, useEffect } from "react";

const CaptureVideo = () => {
  const [vidSource, setVidSource] = useState(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setVidSource(stream);
        const vid = document.getElementById("vid");
        vid.srcObject = stream;
      })
      .catch(console.error);
  }, []);

  console.log(vidSource);
  if (vidSource) {
    console.log(vidSource.getVideoTracks()[0]);
  }

  return (
    <div>
      <h1>Grab a video</h1>
      <video
        id="vid"
        width="500"
        height="500"
        src={vidSource}
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default CaptureVideo;
