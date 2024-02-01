'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4e6451467bfddf413c339eaccbbf7f81",
"assets/AssetManifest.json": "deef990068c915fcd4f3cc71b42e6c36",
"assets/assets/images/bike.png": "5c0056e0e7542dfa187335ba7e938da3",
"assets/assets/images/c.png": "1dcacdf0f51c5a0dfee7909e398c9c86",
"assets/assets/images/css.png": "0313f5cc89e2924223c383f38ded3605",
"assets/assets/images/dart.png": "0a268d67669f6dd4dd3ff982a4e13b54",
"assets/assets/images/flask.png": "51ed6c89bb179da3572ab8dd3383d628",
"assets/assets/images/flutter.png": "209c5473f43076cc9391775aa640bc32",
"assets/assets/images/ghub.png": "48c004c70670aa9452b62a39544ab42f",
"assets/assets/images/git.png": "c6bd4bfe0cc911fdc48e3754dd312635",
"assets/assets/images/html.png": "d249ea8c51f205347ee18003eefb7712",
"assets/assets/images/hub.png": "5526f2152b1adc21a61c42f2763fb811",
"assets/assets/images/ig.png": "b236690c468e703839ed3218a1a6ebb8",
"assets/assets/images/in.png": "690e0f0ac00a94046b4fa89fbe474433",
"assets/assets/images/in_flag.png": "6d8559da2f267a6ef5e6fc698120e0fa",
"assets/assets/images/java.png": "9a1021486242654a1761fa4739233b0f",
"assets/assets/images/js.png": "e569fcf0a4aa499c31216489183362a0",
"assets/assets/images/mail.png": "e5f25f0e5dc090aae03928a0bec3bccb",
"assets/assets/images/netflix.jpg": "2dc97c5c418d610350595a7349ee6505",
"assets/assets/images/pic.png": "9386dd7a4b3d93340936540659a9de30",
"assets/assets/images/ps.png": "4808ceebeb847dfb8bbecc4447519485",
"assets/assets/images/python.png": "2109487c462028bb7d8091d214e73481",
"assets/assets/images/quiz.jpg": "283e03bfa15ac4d736eb2f145d7c5925",
"assets/assets/images/sql.png": "e5b7d954ef2cf6bba359c09e7e364262",
"assets/assets/images/steamy.jpg": "66d326e9713ab608f9ec8d5bd24d08e3",
"assets/assets/pdf/AkshayShineKrishna.pdf": "ffd370c05a5e8e5bdc4ef853a4ff449d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "7d7d2a9fa1baaa88bd78c64cb9e3fdec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1c8a36eb6262a7983bacabaa1a108ad4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "001f294b2a1a770c3a18606524741778",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-chrome-512x512.png": "0017ebd87d36218c526b37f374ef5497",
"icons/apple-touch-icon.png": "0d319590a5c6a83a7ec58858565f6b98",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2e9576f233f4a6357fc435e45e45e4cc",
"/": "2e9576f233f4a6357fc435e45e45e4cc",
"main.dart.js": "ceeb52c2caf4f94e75e2c7e3c68ca00a",
"manifest.json": "9583ebe54188295a4768ae1aa040030b",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
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
