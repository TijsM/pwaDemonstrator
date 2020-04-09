import React, { useState, useEffect } from "react";

import "./CaptureVideo.scss";
import "../Home/Home.scss";

const CaptureVideo = () => {
  // https://www.w3.org/TR/mediastream-recording/#mediarecorderoptions-section
  // https://developers.google.com/web/updates/2016/01/mediarecorder

  const [stream, setStream] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [recorder, setRecorder] = useState(null);
  const [videoBlob, setVideoBlob] = useState(null);

  const chunks = [];

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
    setRecorder(recorder);
    recorder.ondataavailable = (event) => {
      chunks.push(event.data);
    };
    recorder.start(100);

    setRecordedChunks(chunks);
  };

  const stopRecording = () => {
    recorder.stop();
    const vid = document.getElementById("vid");
    vid.srcObject = null;
    downloadAndShowRecording();
  };

  const downloadAndShowRecording = () => {
    const blob = new Blob(recordedChunks, {
      type: "video/webm",
    });
    setVideoBlob(window.URL.createObjectURL(blob));

    const url = URL.createObjectURL(blob);

    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "test.webm";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>Grab a video</h1>
      <div className="vidContainer">
        <div>
          <h2>live</h2>
          <video
            id="vid"
            width="500"
            height="400"
            src={stream}
            autoPlay
            controls
          ></video>
        </div>
        <div>
          <h2>recorded video</h2>
          <video
            id="recording"
            width="500"
            height="400"
            src={videoBlob}
            autoPlay
            controls
          ></video>
        </div>
      </div>
      <div className='buttonContainer'>
        <button className="funcButton" onClick={startRecording}>
          start recording
        </button>
        <button className="funcButton" onClick={stopRecording}>
          stop recording
        </button>
      </div>
    </div>
  );
};

export default CaptureVideo;
