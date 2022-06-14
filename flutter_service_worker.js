'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "dfbe4d46e9ef7465062396c54c72aa53",
"assets/assets/images/%25C3%25A7ama%25C5%259F%25C4%25B1rsuyu.jpg": "92db5d25654b4f36fd92bb7fb0999c90",
"assets/assets/images/%25C3%25A7ama%25C5%259F%25C4%25B1rtozu.jpg": "75d91800897ba26fcdd34d62c2c25dbf",
"assets/assets/images/%25C3%25A7anta.jpg": "a7d09509006c8ff2791bb8cfc0fe902f",
"assets/assets/images/%25C3%25A7atal.jpg": "f800c78489e740403f49dc056e7c5092",
"assets/assets/images/%25C3%25A7ilek.jpg": "0909e512a6dccdfd5692c38175bf361c",
"assets/assets/images/bez.jpg": "0934c4fe767efb7de6bb8767bf4d6dda",
"assets/assets/images/biber.jpg": "38a3faa2294b72802e2b8f02ecacdf60",
"assets/assets/images/boron.jpg": "014b365a9b705020bd749e99de4e492a",
"assets/assets/images/bula%25C5%259F%25C4%25B1ktableti.jpg": "ad581b6e327e6ab520bd6ea262449434",
"assets/assets/images/camsil.jpg": "222ae8846e762f0402064a49c276f6e5",
"assets/assets/images/domates.jpg": "c2a6ec7f42550808c6582a1169b5f830",
"assets/assets/images/elma.jpg": "c0204064f547b21c6f82b3056ce9a00c",
"assets/assets/images/ka%25C5%259F%25C4%25B1k.jpg": "2131ca0e4774140a35d950de5012e8cf",
"assets/assets/images/karpuz.jpg": "73f29f8f1652c26ecd6f24b0a08fc618",
"assets/assets/images/kay%25C4%25B1s%25C4%25B1.jpg": "a125d20ad0357c0fa3280db19715a78a",
"assets/assets/images/kiraz.jpg": "a80f1e0d3b8a11e11434c1f09788a42f",
"assets/assets/images/market.jpg": "635eef4af4bb0ff215a65b385c448e43",
"assets/assets/images/maydanoz.jpg": "b51968f8b87284327669acc227b3df02",
"assets/assets/images/muz.jpg": "9ae7482aa71f2e6ace35500555afe238",
"assets/assets/images/patates.jpg": "8b70d9362724837441dbf754db8e8038",
"assets/assets/images/patl%25C4%25B1can.jpg": "35de7a77447917be91b4ff9b44dd007f",
"assets/assets/images/pe%25C3%25A7ete.jpg": "24d28bfd4a8758f27817b22c029bb8e7",
"assets/assets/images/pril.jpg": "a5b3a95c1ef791673b422c58edfc5706",
"assets/assets/images/s%25C3%25BCnger.jpg": "dcd1432c21ac5bda91b65745cb6a121b",
"assets/assets/images/salatal%25C4%25B1k.jpg": "a8d9a94507621a799995213d6fdc9840",
"assets/assets/images/tuzluk.jpg": "f97cd290692697d36a4931ac01244352",
"assets/assets/images/yenid%25C3%25BCnya.jpg": "d179687ad38d65e01a89fc752ee132b9",
"assets/assets/images/yumu%25C5%259Fat%25C4%25B1c%25C4%25B1.jpg": "1efe268a3c4f5179687584e834502d36",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "eb24618bbb41bf9a1bee5ab2fb0c9cea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "41c5162640a94974bd8266dcc13d2ddd",
"/": "41c5162640a94974bd8266dcc13d2ddd",
"main.dart.js": "2c2a3d704d6a19da68e6855c1be7268b",
"manifest.json": "1ff74c1420072eaf5e989501e7bd7bae",
"version.json": "f68bb0ce5d8be772ed7529034a2c7315"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
