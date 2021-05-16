'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/config": "6d1f4a3ce32ce9b3439d23c9d36261b1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2e92b0d57ec1da6efd3efcfd83bd150f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "9560cad5e7e4a753e9ee2c0d0747341c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8c0af326678ec9ca6bf8d96eeeac4af1",
".git/logs/refs/heads/main": "7f79800d9aa5127a4bbc8ca2ac677f1b",
".git/logs/refs/remotes/origin/main": "0b9b3cf565427889b8d6e2f4327ef584",
".git/objects/01/bd1fb92d102b5258bf52a51e73454777aec7bd": "538311db006c9535970487ea26c2e4fc",
".git/objects/06/c11c406cec39894765e9b9ca3cdbcd9c30f5ca": "d66c02d16d59f4afe2f087fa1c6012c1",
".git/objects/13/a3c06e6402cf72bba8ddbc784a91aa417c7d42": "ca4ad6dc4e566f315c85aa0e722cc026",
".git/objects/13/fb6393fd24983520325f2a7c5af53bd305e2c8": "0d1b539bf00b06b63abe0caaf3256d42",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/20/9f1914d38488dcc9e79a75d36d4fadd8baf67c": "0e9cbcdc9004db2b108ade832ab80762",
".git/objects/3f/be8d3773a48ad0fe417b5719b5cb4143e30a2c": "a8905d1cc7cd910ade043ba6ed55b0fd",
".git/objects/43/1cb6c0007f9b28879e7d3513b101a61c813c38": "a5aa95f226dbcca106d7c1cb2537c89d",
".git/objects/43/6ffd03c8d57fb2e08e8898ad2a32c55be5a8f0": "5c3df42b9be0f776202756205002964c",
".git/objects/58/8c793f1d00963d8470893c1ac8ffd4ec3149f9": "ac9392f2cc0759a09927a323cd3f7f9c",
".git/objects/5f/cafb75bbfd38842d474554c45d09fd3290c7a0": "98a423f2e631190d8c444491579fd564",
".git/objects/65/7274a458ad04dd74ed3eb6ee8953b93381fd5a": "b77dc75575d9b7d7a8f231e9a50c1ff1",
".git/objects/6d/312def9f0304b8b0c480cdda61b3941468eea0": "0cdab3148b3b06b71c87c05c6ea35824",
".git/objects/6d/f4d689fb40c76cb01286cc1b2f7e83ab5d8f6e": "65bf0955957cd1cc0b56cc92d9aeeb6e",
".git/objects/70/9470525855f7f438898142385da87250487365": "3d9f68ecd14c88a7d0f2acb4e1535e11",
".git/objects/7a/628368f2ed020aa7006dc2815c2d17ad07c089": "11a0d7282f46cbe272ac38125dada010",
".git/objects/7e/8cd33dc4a6521ab7d40c83c2350ffe2edebf63": "89b5b2c0d4fa8ba67d3a19fdb614f487",
".git/objects/83/27c1d8fd0d226ad8a52c66884c6d17741a840c": "eb2615b37de12e6f79bf434282a7931a",
".git/objects/94/a66746d96bca7a1bf20126879effb3562d8117": "0d656577ffad1523a44cb05f6d3cb2e0",
".git/objects/97/de85ca07733175095462ff29ab7c051e39e4ee": "45d9593a65b96d6ae4567ab66efdec9f",
".git/objects/aa/d799d3e14430b8cc156e7bc89a7b3318532e65": "79ea14853ada1a0ff3da6013b574cac2",
".git/objects/b4/976369911bdfd7dbc69b66d594134d09ee1143": "3eb99b46346e9db5b8a96545c51637ca",
".git/objects/c3/f69725e7d2a357936284e0761aa48be6718977": "af866b4f836fcf8539d924f1585142a5",
".git/objects/df/6f3ce619dab5986f569cd8269e42c0000c0ab8": "6ba468dcda7cdf5401c4eed6cd231f93",
".git/objects/f7/7311867d368dd11097a01d20f5be82e56254fd": "473edb704bfff0e7ffe7a1451496c77b",
".git/refs/heads/main": "35968c43301edd6067fc394096c3c3bb",
".git/refs/remotes/origin/main": "35968c43301edd6067fc394096c3c3bb",
"assets/AssetManifest.json": "593069a3c034aed5eb021f8e3efa3190",
"assets/FontManifest.json": "e9c1497197d22052c62a791666dea226",
"assets/images/avatar.png": "bc8487a4e03329896e6e0c895a6fb6ce",
"assets/NOTICES": "98872a780d0c7480cb3f147b76d4047b",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"favicon.png": "7ab68f2597071bec39bd1e6fb261208a",
"icons/Icon-471.png": "7ab68f2597071bec39bd1e6fb261208a",
"index.html": "158f118123569572e1696f3b08c1a06b",
"/": "158f118123569572e1696f3b08c1a06b",
"main.dart.js": "7e4bd276177b67fbb83e43c4763eec5e",
"version.json": "281f2a7b1646c3dea6feea25f04fa556"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
