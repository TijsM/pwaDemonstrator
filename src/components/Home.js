import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Home.scss";


const Home = (props) => {
  const [routeGeolocation, setRouteGeolocation] = useState(false);
  let routeTo = "";

  routeTo = routeGeolocation && <Redirect to={`/geolocation`} />;

  return (
    <div>
      <h1>PWA's are the heroes of tomorow!</h1>
      <div className='headerCaption'>
        Bro, believe me, it's true! You don't have to take my worth for it, just
        take a look at these examples <span role='img' aria-label="wink">😉</span>
      </div>

      <button onClick={() => setRouteGeolocation(true)}>
        Geolocation
      </button>


   
      {routeTo}
    </div>
  );
};

export default Home;
