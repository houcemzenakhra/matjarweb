'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2d059b725e44e0faf172d42105613d3b",
"index.html": "b2b65c723e1f60b60409282517583d97",
"/": "b2b65c723e1f60b60409282517583d97",
"main.dart.js": "92ac38a26fc0745ebe07f2a886989108",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "990b3f0dac3efc5afbe0e5c7d7282a77",
"icons/Icon-192.png": "e0ddeb0d85fd15eb121127fabefb149a",
"icons/Icon-maskable-192.png": "e0ddeb0d85fd15eb121127fabefb149a",
"icons/Icon-maskable-512.png": "5b92304a7013ffb08de164d251dafd3f",
"icons/Icon-512.png": "5b92304a7013ffb08de164d251dafd3f",
"manifest.json": "e0925ae6f7706369f1c8d5d5b473293b",
"assets/AssetManifest.json": "61294f80fa9f5e3f5107adad17776a59",
"assets/NOTICES": "ce9e59a22e3babc9b1f01f39d4aac745",
"assets/FontManifest.json": "afa9272776624651fbd5e7d94b2de4b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "d5c391233c9ecf7778c3a72ca62d7fc1",
"assets/fonts/MaterialIcons-Regular.otf": "034972576191a26d218d78bc508c053a",
"assets/assets/svg/matjar_logo.svg": "fadc23d8cbd8df2c672c3f5d03315575",
"assets/assets/svg/empty_suplier.svg": "a2e9c8751f915690c5887b637b0865d5",
"assets/assets/svg/logo_placeholder.svg": "7147cf88909f788a5f783ada6c74fdc8",
"assets/assets/svg/image_placeholder.svg": "a6d812cd486e2c59d9a74e06994c658b",
"assets/assets/svg/empty_comptoir.svg": "475e73f290e963ad587acf3083e5fe5b",
"assets/assets/svg/image_upload.svg": "69a29b79d7b99103c4aef9272e605ee1",
"assets/assets/svg/empty_product.svg": "62ecc279305dcb7abbe4609ceb2c9c74",
"assets/assets/svg/splash_logo.svg": "df3ab9921e708ac983aa265079f74f20",
"assets/assets/svg/Calque_1.svg": "bdd2bb6cb3d1e436518be6388c491884",
"assets/assets/svg/empty_client.svg": "b41807b3f9c54d44e60306fb81095ded",
"assets/assets/svg/dial_logo.svg": "35ea6f7ebc408e43aafa48e90e4896d5",
"assets/assets/svg/logo.svg": "549be315df97c8a92dbd0f4a6c64da2c",
"assets/assets/images/icon.png": "58286ba0657bc3787bce703c66c69ff6",
"assets/assets/images/store.png": "0f346dd8fdced89d0de47041c95ca0f3",
"assets/assets/images/p3.png": "65238c289c1eeb8f9bfb71c1eaa135b3",
"assets/assets/images/p2.png": "c54f5187851f03af01d3d1031ddf2fd7",
"assets/assets/images/p1.png": "ececa532e63112984e048aa9a877b43d",
"assets/assets/images/p5.png": "ad8029044530deaa38eac84d64f001fd",
"assets/assets/images/p4.png": "712534389e9ab19385652363855f7a26",
"assets/assets/images/p6.png": "ececa532e63112984e048aa9a877b43d",
"assets/assets/icons/Search.svg": "5654943eaa594295c1ae85aedbd2c886",
"assets/assets/icons/List.svg": "bf86f7899c2386b5f0e66dda2c7fbe8f",
"assets/assets/icons/matjar.svg": "e2930451084d43ca9fb95f47971bea05",
"assets/assets/icons/Mailto.svg": "16ff51f60f3430c400a834a814db51ca",
"assets/assets/icons/scan_matjar.svg": "efd86fe0334a5c9d131944b122d2c0b7",
"assets/assets/icons/Ticket.svg": "5337e4c8386e5b091be2ecea9120f5aa",
"assets/assets/icons/Down.svg": "941051f3c15c841c6b877921089b5467",
"assets/assets/icons/Calender.svg": "ae3463a2ef0e4b0bc1b1f35a0d02ab4b",
"assets/assets/icons/Product.svg": "386310dac8cec44f0e829931986539cc",
"assets/assets/icons/matjar2.svg": "161c007be136cd366f603e901f25e869",
"assets/assets/icons/Group.svg": "a74fe653ca4e1b862a1f44480e9bbf01",
"assets/assets/icons/Download.svg": "939727529744e841b21011f3a2d4290c",
"assets/assets/icons/Calculate.svg": "ca487f9a5c1f949c69a39748d6d05f3c",
"assets/assets/icons/Transaction.svg": "2e703e7c710f330434f9b70e80c4d6df",
"assets/assets/icons/plus.svg": "5b671fc56ae6e09ec008e0e4f91e3558",
"assets/assets/icons/check.svg": "adb4c16e2bd6512449fbf5f7b6f0a4f8",
"assets/assets/icons/Add-more.svg": "2255de8fe560942ecabddc8c4aa271a3",
"assets/assets/icons/Info.svg": "cd23aeaf4dff106d655816a6333fe28f",
"assets/assets/icons/Stat.svg": "97c1ed6e9e6d600dc287755a88956aeb",
"assets/assets/icons/Scan.svg": "22502c9342d59a4493c937ee78d6e5b6",
"assets/assets/icons/Client.svg": "9652d5c75b7d69a722ae3514a28bb421",
"assets/assets/icons/Setting.svg": "cde31d17eeab1c56ae935936b3108324",
"assets/assets/icons/back.svg": "7f473ef3381a4cb2083265b0312097f0",
"assets/assets/icons/Sell.svg": "b6cbe1bd76a011f9e161363f1fb24ea7",
"assets/assets/icons/comptoire.svg": "8f1543977ed123c213f6a6de4ad9b540",
"assets/assets/icons/Truck.svg": "7ce2094e03c5e3484e11874b7019e1a0",
"assets/assets/icons/more.svg": "eae7ad47a9a42e6e5a513834ee8502f1",
"assets/assets/icons/Edit.svg": "79d67f8146d01a7c33a27f7f812327df",
"assets/assets/icons/Gift.svg": "d728d37a485cff1e7d8a5c4a9a7ec4a5",
"assets/assets/icons/turn%2520Back.svg": "55754e8ad9f2c85b9a1086d0116f3ae6",
"assets/assets/icons/Invoice.svg": "2e5cfb0e4d60c55d0e758ffb9a5a10aa",
"assets/assets/icons/Upload.svg": "11d31a8edb31f6c050a62bfd0b49adfb",
"assets/assets/icons/Help.svg": "3f1bbb62e78994c2393d979ccf9b1e6b",
"assets/assets/icons/drop.svg": "7fb2fe54c016d6e667ab6b7024e0b14b",
"assets/assets/icons/Print.svg": "7a0000d25db5664cb609c83d9b33a51d",
"assets/assets/fonts/Gilroy-Regular.otf": "93a118ae3780dd9c4acc80c606b3c1b5",
"assets/assets/fonts/Gilroy-Black.otf": "5440ca6b6b6fe6b2ca5d0e88412c0843",
"assets/assets/fonts/Gilroy-Medium.otf": "5c1e574883aeccf0f98afb84482f3839",
"assets/assets/fonts/matjar/fonts/Matjar.ttf": "2e4982e7f18307e9309d1969ca562766",
"assets/assets/fonts/Gilroy-Bold.otf": "f18b0b6645c0a1e1dc2c326de626a7cd",
"assets/assets/fonts/Gilroy-Semibold.otf": "ac29a758c5d2d12b4ccabde8d975bec6",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
