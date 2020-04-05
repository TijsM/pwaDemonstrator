import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Home.scss";

const Home = (props) => {
  const [routeGeolocation, setRouteGeolocation] = useState(null);
  const [watchLocation, setWatchLocation] = useState(null);

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
          onClick={() => setRouteGeolocation(<Redirect to={`/geolocation`} />)}
        >
          geolocation
        </button>
        <button
          className="funcButton"
          onClick={() => setWatchLocation(<Redirect to={`/watchLocation`} />)}
        >
          watch location
        </button>
      </div>

      {routeGeolocation}
      {watchLocation}
    </div>
  );
};

export default Home;
