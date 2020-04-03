import React, { useState, useEffect } from "react";

const Geolocation = () => {
  const [location, setLocation] = useState({
    status: "noPermission",
  });

  useEffect(() => {
    const found = (location) => {
      setLocation({
        status: "found",
        data: location,
      });
    };

    const error = (error) => {
      setLocation({
        status: "error",
        data: error,
      });
    };

    navigator.geolocation.getCurrentPosition(found, error);
  }, []);

  console.log(location);
  const locationJsx = location.status === "found" && <div>
    longitude = {location.data.coords.longitude}
    latitude = {location.data.coords.latitude}
  </div>;

  return (
    <div>
      {location.status === "noPermission" && "asking for permissions"}
      {location.status === "error" && "error"}
      {location.status === "found" && locationJsx}
    </div>
  );
};

export default Geolocation;
