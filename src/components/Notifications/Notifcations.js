import React, { useState, useEffect } from "react";

const Notifications = () => {
  const [hasPermission, setHasPermission] = useState();

  useEffect(() => {
    Notification.requestPermission((result) => {
      if (result !== "granted") {
        console.log("no notification permission granted");
        setHasPermission(false);
      } else {
        console.log("permission granted");
        setHasPermission(true);
      }
    });
  });

  const displayNotification = () => {
    if ("serviceWorker" in navigator) {
      const options = {
        // the content of the notificaiton
        body: "heeey, this is the body of the notification",

        // icon of the notification
        icon:
          "https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png",

        //is part of the notification - only on androir phone
        image:
          "https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png",

        //text alignment  - ltr = left to right,
        dir: "ltr",

        ///BCP 47 - for screenreader
        lang: "en-US",

        //vibration pattern/ 100ms vibrate, 50ms pause, 200ms vibrate
        vibrate: [200, 50, 400],

        //only on android - icon that shows up in status bar on android phones
        badge:
          "https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png",

        //notifications with the same tag will be stacked or will replace each other
        tag: "confirm-notification",

        // vibrate again if the a notificaiton with the same tag popped up
        renotify: true,
      };
      navigator.serviceWorker.ready.then((swreg) => {
        swreg.showNotification("Weeee notifications from the web", options);
      });
    } else {
      console.log("reee");
    }
  };

  return (
    <div>
      <h1>Notifications</h1>
      <div className="headerCaption">
        A web app can make use of the notifications in the operating system
      </div>
      <div className='container'>
        {hasPermission ? (
          <button className="funcButton" onClick={displayNotification}>
            display notification
          </button>
        ) : (
          <div> we don't have the permission to display notifications </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
