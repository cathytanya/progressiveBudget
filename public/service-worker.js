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

// making varibales for the static cache and runtime cache
const STATIC_CACHE = "static-cache-v1";
const RUNTIME_CACHE = "runtime-cache";

// eventlister install cache
self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});