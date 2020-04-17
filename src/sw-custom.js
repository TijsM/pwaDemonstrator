/* eslint-disable*/

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
);


self.addEventListener("install", (event) => {
  console.log("[Service Worker] installing Service Worker ....", event);
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  console.log("[Service Worker] Activating Service Worker ....", event);
});





workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
