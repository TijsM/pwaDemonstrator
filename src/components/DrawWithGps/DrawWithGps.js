import React, { useState, useEffect, useRef } from "react";

const DrawWithGps = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const success = (pos) => {
      const _state = [...locations];
      _state.push({
        accuracy: pos.coords.accuracy,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
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

  
  const calcRelativeMovement = (long1, lat1, long2, lat2) => {
    const verticalMovement = long1 - long2;
    const horizontalMovement = lat1 - lat2; 

    const relativeVerticalMovement = verticalMovement/90;
    const relatiHorizontalMovement = horizontalMovement/90;
    

    return({
      vertical: relativeVerticalMovement,
      horizontalMovement: relatiHorizontalMovement
    })
  }

  console.log(calcRelativeMovement(3.6064212, 50.9613447, 3.6064213,50.9613447))
  console.log(locations);

  return (
    <div>
      <h1>Draw by moving</h1>
      <div className="headerCaption">
        the path where you are walking will be a painting! Be creative and
        create something awesome!
        <br /> I created a canvas of 200meters by 200 meter for you! Go ahead
        and create some art.
      </div>
    </div>
  );
};

export default DrawWithGps;
