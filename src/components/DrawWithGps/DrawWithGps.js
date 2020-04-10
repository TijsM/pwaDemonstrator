import React, { useState, useEffect } from "react";
import Sketch from "react-p5";

const DrawWithGps = () => {
  const [locations, setLocations] = useState([]);
  // const mockLocations = [
  //   {
  //     latitude:  50.1,
  //     longitude: 3.606
  //   },
  //   {
  //     latitude:  50.2,
  //     longitude: 3.606
  //   },
  //   {
  //     latitude:  50.3,
  //     longitude: 3.606
  //   },
  //   {
  //     latitude:  50.4,
  //     longitude: 3.606
  //   },
  //   {
  //     latitude:  50.5,
  //     longitude: 3.606
  //   },
  //   {
  //     latitude:  50.6,
  //     longitude: 3.62
  //   },
  //   {
  //     latitude:  50.7,
  //     longitude: 3.64
  //   },
  //   {
  //     latitude:  50.9,
  //     longitude: 3.8
  //   },
  // ]
  

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


  const makeCoordsRelative = (long, lat) => {
    const _long = long/90 * window.innerWidth;
    const _lat = lat/90 * window.innerHeight-150;

    return{
      longitude: _long,
      latitude: _lat
    }
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight-150).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };

  const draw = p5 => {
    p5.background(255);
    locations.forEach((loc, index) => {
      const relativeLoc = makeCoordsRelative(loc.longitude, loc.latitude)
      console.log('relativeloc', index , relativeLoc)
      const horizontalCord = relativeLoc.longitude;
      const verticalCord = relativeLoc.latitude;
      
      const c = p5.color("red");
      p5.fill(c)
      p5.noStroke()
      p5.ellipse(horizontalCord, verticalCord, 10)
    })
  }

  return (
    <div>
      <h1>Draw by moving</h1>
      <div className="headerCaption">
        the path where you are walking will be a painting! Be creative and
        create something awesome!
        <br /> I created a canvas of 200meters by 200 meter for you! Go ahead
        and create some art.
      </div>

      <Sketch setup={setup} draw={draw} ></Sketch>
    </div>
  );
};

export default DrawWithGps;
