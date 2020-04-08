import React, { useState, useEffect } from "react";

const CaptureVideo = () => {
  const [stream, setStream] = useState(null);
  

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((vidStream) => {
        setStream(vidStream);
        const vid = document.getElementById("vid");
        vid.srcObject = vidStream;
      })
      .catch(console.error);

    }, []);

  console.log(stream);
  if (stream) {
    console.log(stream.getVideoTracks()[0]);
  }


  const recordedChunks = []

  const startRecording = () => {

    let recorder = null;
    recorder = new MediaRecorder(stream, {mimeType : "video/webm"});

    recorder.ondataavailable = (event) => {
      console.log(' Recorded chunk of size ' + event.data.size + "B");
      recordedChunks.push(event.data);
    };

    recorder.start(100);
  }

  return (
    <div>
      <h1>Grab a video</h1>
      <video
        id="vid"
        width="500"
        height="500"
        src={stream}
        autoPlay
        controls
      ></video>
      <button onClick={startRecording}>START</button>
    </div>
  );
};

export default CaptureVideo;
