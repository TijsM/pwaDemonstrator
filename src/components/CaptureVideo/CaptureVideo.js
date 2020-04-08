import React, { useState, useEffect } from "react";

const CaptureVideo = () => {
  const [stream, setStream] = useState(null);
  const [recordedChunks, setRecorderChunks] = useState([]);
  const [recorder, setRecorder] = useState(null);

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

  const startRecording = () => {
    const recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
    setRecorder(recorder)

    recorder.ondataavailable = (event) => {
      const _recChunks = [...recordedChunks];
      _recChunks.push(event.data);
      setRecorderChunks(_recChunks);
    };
    recorder.start(100);
  };

  const stopRecording = () => {
    recorder.stop()
  };
  console.log(recordedChunks)

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
      <button onClick={stopRecording}>STOP</button>
    </div>
  );
};

export default CaptureVideo;
