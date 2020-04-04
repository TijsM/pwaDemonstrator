import React, { useState, useEffect } from "react";

import "./Watchlocation.scss";

const WatchLocation = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const success = (pos) => {
      const _state = [...locations];
      _state.push({
        accuracy: pos.coords.accuracy,
        latitude: pos.coords.latitude,
        longitude: pos.coords.latitude,
      });

      setLocations(_state);
    };

    const error = (error) => {
      console.log("error", error);
    };

    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
    };

    navigator.geolocation.watchPosition(success, error, options);
  }, [locations, setLocations]);

  console.log(locations);

  const locationsJSX = locations.map((loc) => {
    return (
      <div key={Math.random()} className="location">
        <div>accuracy: {loc.accuracy}</div>
        <div>longitude: {loc.longitude}</div>
        <div>latitude: {loc.latitude}</div>
      </div>
    );
  });

  return (
    <div>
      <h1>Watchlocation</h1>
      <div className="headerCaption">
        the accuracy is the confidence lever (the higher the better). <br />
        everytime you move a new location will be printed
      </div>
      {locationsJSX}
    </div>
  );
};

export default WatchLocation;
