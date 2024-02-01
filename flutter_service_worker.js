'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2d43c456f081c4dce2095bb52bacf58f",
".git/config": "2f291d6eb3b4954018af9ae51f608e97",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4138a208a095823ffcf9908fa1b812f0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c1b80e1e4a928b1b2d8165ac6b571575",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b2c96fc37b5791a60301bc17c74c9235",
".git/logs/refs/heads/master": "b2c96fc37b5791a60301bc17c74c9235",
".git/logs/refs/remotes/ASUS/master": "fe359ce80aaada3765dcb6a052556709",
".git/objects/03/9ed36b54b0ae79086f78eabd709ef8124e8d8d": "c971f2431d469d87dca3d82a32e62a53",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/635a2c64be83270a4080a706947d92e95ddd0a": "d3ac19647ecf1b4923c4e7c8ec89d494",
".git/objects/07/ad47e774a5aa4cc9779c6613c5ab692700fe82": "15ad6117d376c7696344be3883644394",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0f/a0df7c1aa41d80146862b7a1a88e9395e5e13e": "0ff20bf6a4077358efa1d9814041dd0a",
".git/objects/0f/a4acb95eebab8b5952ecaf985d3e8501c2bf72": "b11f2f8fc6dc72afa5faf1c589639189",
".git/objects/1c/dab718b5dcb44123b4341ff1c3ddd86efed4eb": "2fb89ae75d15e8190f2ef4b7f47d5ebb",
".git/objects/1d/4b42ed3f9faf74bf494034f3bff28306b1918b": "3a868d3ce6055ea70252efadfb5f180b",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/21/4e99549c5949fa5bbd3fb98c5c97d8b285aada": "71e228f436040e055c4aea080bd0f90c",
".git/objects/22/e20dc2f4c94ca3f856b618ea4825d2a70742b8": "13f36fe7b3e45424b25f86557f3423dc",
".git/objects/23/879c197664f284579f5fda4125b2507ba57ef5": "51c3b677b3cac8a2f5fdd9802afe8098",
".git/objects/24/e2a7fbf7c16758de24a63b2a2d8137f0dcd789": "98a6373a5f93f1bf72c05dbd497d8aec",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/5bdb68bf808833cd480fef2f56384e66fc9c63": "cb0ea89b6364f25a3e4deec395e00950",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/2d0ac2753822d47391236ce6373ebf3539c1a1": "ec5e36e705e599622eaf35fc5f4e4b92",
".git/objects/38/b4c32a180c96f94674d960eb0bdfb7785751ea": "2c3a02a4bff88df2ea243ab8a4295c76",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/42/d17e527d1ff95c17533ab7d0735c10add2034b": "5f96c480f46b2f5ce607318d0e237842",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/3562533a7969d9c973ef877a7a9912cd4f788c": "1e69683d4c9a5c3081fafbc3ca762f2f",
".git/objects/4d/c928a777c4e94872bc2d55c0b15b20217e5be4": "830b0fabf63048030eaaebdc8d6159b4",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/806bb9c3818f6fc4ff21db6562fc60ab26efb4": "8e0697c0b250f58b56b453ac7d531566",
".git/objects/54/fa1b36b503edffd4ac265bb325f7f4093a58fc": "8c696221523c407bce4e07b30c212a40",
".git/objects/57/14022bf06aff4353b777dbfa0cd1494e4b02f6": "fd2afacb6083c02c3670d13a869e4368",
".git/objects/58/03d7a8aef5536f76776912a175ce002fd7a2b7": "53105bec99ed18c825bdfbd9ca350e4c",
".git/objects/61/28c1f12cfce4d7e48e7d3020651f5d637f1316": "23b2e6bdaefc5a9e9fc0c967f3e01b0b",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/76/86a09881bd682d21b9a403ab76060e62b3887c": "f04975ab82204707166a72ef469c64e6",
".git/objects/7b/a10b7cfa35391c7109715e61951a1f8a12fee0": "313d2c15287d253a40dddf342e579c21",
".git/objects/7c/25e05c8c061737b5b8701dc8cf55d89413482a": "2d6c7d2ba99d3b36a26b71bfc9e681db",
".git/objects/83/8e56158034ccb763b7c552219093165ef83d78": "f471f1bb03f58092a67f70dd97065a68",
".git/objects/83/8e80678d2060d343bc04c9eb2108504a5d4820": "2e196edccdf507e037356245b1f9b6b6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/92/3f87dd15d588dc294cae7df6f309c1ea4c11c2": "f89a1e3e2dd0a0d009cf8371815077d9",
".git/objects/9e/de0889be19e2c01abe95fcf7ba1cb2a2cee2d6": "3a99fa954248a188c5cd46204d27a5be",
".git/objects/a4/272c7367bbd41f9020b7f16004ca8efa1bd092": "79c046d38e43da2da73ae915ff8f2bb8",
".git/objects/a4/adccca406826b7ae09a8d34d201f6c08c914b5": "b0683077fd18b9e5a216528e96bbff6d",
".git/objects/a7/8c5c8d246ecdec261f9b684ae01abdd02310cd": "6c81ba33b15ec53c98f3b37c5ec07ce7",
".git/objects/a8/fdf30c75d28e873675bd0d39c869da2d333090": "2124e6df0dcbe316eba63aeed817eaf8",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/52706a8b6f37182e2b991d39fc984b6d375e33": "b77eaaeee2082f506ac863c5fdf0399c",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c3/9db098ea27c2ae69d11b50b2834a225c4aaf4a": "fb5ba43e9807049d5d10df15276be66a",
".git/objects/c7/c57e76ae92e47a6708f7c2d08371deee4f0e04": "cd7d1905e10679aea0c59653ab9a6f66",
".git/objects/c7/fd93ae1e9bb75526c87260718d94c850ebb444": "f1cbc1d8d24539e78133e6fbde2618c7",
".git/objects/d0/97b61f0b52ee273d386367700f6db9bfe535b1": "b55fe2d7c511728dee214ba7ddade206",
".git/objects/d3/41125599f683f3ef46a4055f77edaf9bb47aa3": "2c7522998ea624d2336ccd7a7c2986a3",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/cb918023f181450030564860b05df40b80c831": "0de6e9db2cb9f5101f02b56feb68a990",
".git/objects/d5/d32fa9888037e502f8e7a1afa65ad7395adc9f": "a05b5b274849d5e9c89264b57d63db75",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e1/8342cb7a5085915191f13d32ce7ce9b09bf107": "8e09fea7bb94efc573383f7e9d91134e",
".git/objects/e4/107abd501cfb7884e1f6f197d769643fe005ad": "0b45f293f00be760aa2e63c7a220bee3",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/fa63106b8d021cb0b86856509e3bac383f6068": "120568928f8a9deaf96c431ddbb4367c",
".git/objects/f5/16d6723c30a234bf6b7da72f18e7e33dda261f": "eb52d8e279579c85082cb29d0a2f3c2e",
".git/refs/heads/master": "02bbd7cad0759193e18e8354d1303e79",
".git/refs/remotes/ASUS/master": "02bbd7cad0759193e18e8354d1303e79",
"assets/AssetManifest.bin": "4e6451467bfddf413c339eaccbbf7f81",
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
"index.html": "dda32cdc4c9d63c5384a4cc8c9fbbe1f",
"/": "dda32cdc4c9d63c5384a4cc8c9fbbe1f",
"main.dart.js": "ebb980084a09001b42dd440655dc888a",
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
