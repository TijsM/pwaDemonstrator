import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const [geolocation, setGeolocation] = useState(null);
  const [watchLocation, setWatchLocation] = useState(null);
  const [visibility, setVisibility] = useState(null);
  const [vibration, setVibration] = useState(null);
  const [drawGps, setDrawGps] = useState(null);
  const [captureVideo, setCaptureVideo] = useState(null);

  return (
    <div>
      <h1>PWA's are the heroes of tomorow!</h1>
      <div className="headerCaption">
        Bro, believe me, it's true! You don't have to take my worth for it, just
        take a look at these examples{" "}
        <span role="img" aria-label="wink">
          😉
        </span>
      </div>

      <div className='buttonContainer'>
        <button
          className="funcButton"
          onClick={() => setGeolocation(<Redirect to={`/geolocation`} />)}
        >
          geolocation
        </button>
        <button
          className="funcButton"
          onClick={() => setWatchLocation(<Redirect to={`/watchLocation`} />)}
        >
          watch location
        </button>
        <button
          className="funcButton"
          onClick={() => setVisibility(<Redirect to={`/visibility`} />)}
        >
          visibility
        </button>
        <button
          className="funcButton"
          onClick={() => setVibration(<Redirect to={`/vibration`} />)}
        >
          vibration
        </button>
        <button
          className="funcButton"
          onClick={() => setDrawGps(<Redirect to={`/drawWithGps`} />)}
        >
          draw with gps
        </button>
        <button
          className="funcButton"
          onClick={() => setCaptureVideo(<Redirect to={`/captureVideo`} />)}
        >
          captureVideo
        </button>
      </div>


      {geolocation}
      {watchLocation}
      {visibility}
      {vibration}
      {drawGps}
      {captureVideo}
    </div>
  );
};

export default Home;
