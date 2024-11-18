'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b15659ec4913a4ca85c9733722fc5224",
"assets/AssetManifest.bin.json": "41b7eb014a9c7e7d95cbc52f97db1e21",
"assets/AssetManifest.json": "2627e2046862d6e58370668e45720f14",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "eae5b38b59e8134dfc98c80d3d207484",
"assets/image/%25D8%25A7%25D8%25B3%25D9%2586%25D8%25A7%25D9%2586.jpeg": "aa36114e64eca3c9c9a3453d4704adf5",
"assets/image/%25D8%25A7%25D8%25B7%25D9%2581%25D8%25A7%25D9%2584.jpeg": "4c2f2516510df87a6dff34ad4ef0559f",
"assets/image/%25D8%25A7%25D9%2586%25D9%2581%2520%25D9%2588%25D8%25A7%25D8%25B0%25D9%2586%2520%25D9%2588%25D8%25AD%25D9%2586%25D8%25AC%25D8%25B1%25D9%2587.jpeg": "573f69bd11588268fb1d7eca31459f0f",
"assets/image/%25D8%25AC%25D9%2584%25D8%25AF%25D9%258A%25D9%2587.jpeg": "0cc6c39e25317e48603c332350f23865",
"assets/image/%25D8%25B9%25D8%25B8%25D8%25A7%25D9%2585.jpeg": "aa3e11e227fe64f7801f97a361da8499",
"assets/image/%25D9%2585%25D8%25AE%2520%25D9%2588%25D8%25A7%25D8%25B9%25D8%25B5%25D8%25A7%25D8%25A8.jpeg": "372a14dc801caa3db03b7781995424a1",
"assets/image/%25D9%2586%25D8%25B3%25D8%25A7%25D8%25A1%2520%25D9%2588%25D8%25AA%25D9%2588%25D9%2584%25D9%258A%25D8%25AF.jpeg": "12f5df687b00e263e1777f3c4d250558",
"assets/image/666.jpg": "8a1e8b854ad8f7d7eab561f0d340621b",
"assets/image/acdimy.jpg": "08c82bb57c6fa620ced01e83c62a20ae",
"assets/image/bu.jpg": "ed2bab6436668c61d78b8d231d7059bd",
"assets/image/comfarte%2520care%2520groub.jpg": "f7db43690bb5c961dff72dda690ab2c7",
"assets/image/comfert_care.png": "2144afc373aa894134ad74410f11d359",
"assets/image/comfrt_cover.jpg": "c91f0e9bd8499d9810b445d95703f161",
"assets/image/cover%2520Image.jpg": "530b711c80024046e004c8dda74ab7d4",
"assets/image/e58b239e.gif": "f7d493a20effdef9804a4cee925f0719",
"assets/image/salmtk.jpg": "cda6464e4a2837555c3c964d512b735b",
"assets/image/Screenshot_2024-07-07_101816-removebg-preview.png": "9b475e08fde660ea5e075950abace3e9",
"assets/image/search-header-background.jpg": "98a973434f67cfe726ab4527aa21aedd",
"assets/image/WhatsApp%2520Video%25202024-10-16%2520at%252002.34.24_e58b239e.mp4": "81bc2b606ed5ebefd002ac0b3cb2c4fd",
"assets/NOTICES": "46d4bc3ce31e026ce1fc5adec78ef48a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b816a2f7745b89d1b9f0b3fb805995c2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "0284533021f866cdef628455c1f06aeb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8010087dbbee8d75acb63bf47f269660",
"/": "8010087dbbee8d75acb63bf47f269660",
"main.dart.js": "9da46898172beb6ba4aaec136925d8eb",
"manifest.json": "4f6036875c455c2bbb38090a526046b6",
"version.json": "a14bea84b8eba2fdf53689b42b57fff4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
