// console logging letting user know the service-work is working
console.log("Hi, I'm your service-worker.js and I'm working.")
// cache files
const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/assets/css/styles.css",
    "/assets/js/index.js",
    "/manifest.webmanifest",
    "/assets/images/icons/icon-192x192.png",
    "/assets/images/icons/icon-512x512.png"
  ];

  const STATIC_CACHE = "static-cache-v1";
const RUNTIME_CACHE = "runtime-cache";