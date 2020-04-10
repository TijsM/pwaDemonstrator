import React, { useState, useEffect } from "react";
import { opendata } from "../../constants";

const Geolocation = () => {
  const [location, setLocation] = useState({
    status: "noPermission",
  });

  const [address, setAddress] = useState(null);

  useEffect(() => {
    const found = async (location) => {
      setLocation({
        status: "found",
        data: location,
      });

      if (location) {
        console.log('eoo')
        const api = "https://api.opencagedata.com/geocode/v1/json";
        const url =
          api +
          "?" +
          "key=" +
          opendata +
          "&q=" +
          encodeURIComponent(
            location.coords.latitude + "," + location.coords.longitude
          ) +
          "&pretty=1" +
          "&no_annotations=1";

        let _address = await fetch(url);
        _address = await _address.json();

        console.log("address", _address);

        setAddress(_address.results[0].formatted);
      }
    };

    const error = (error) => {
      setLocation({
        status: "error",
        data: error,
      });
    };

    navigator.geolocation.getCurrentPosition(found, error);

  }, []);

  const locationJsx = location.status === "found" && (
    <div>
      <div> longitude = {location.data.coords.longitude}</div>
      <div>latitude = {location.data.coords.latitude}</div>
    </div>
  );

  return (
    <div>
      <h1>Watchlocation</h1>
      <div className="headerCaption">
        the accuracy is the confidence lever (the higher the better). <br />
        your location at this point in time will be printed
      </div>
      {location.status === "noPermission" && "asking for permissions"}
      {location.status === "error" && "error"}
      {location.status === "found" && locationJsx}

      {address ? (
        <div>
          oh yeah, and I know where that is{" "}
          <span role="img" aria-label="wink" /> 😉 {address}
        </div>
      ) : null}
    </div>
  );
};

export default Geolocation;
