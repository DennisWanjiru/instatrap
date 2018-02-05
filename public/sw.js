self.addEventListener('install', event => {
    console.log("Installing service worker...", event)
})

self.addEventListener('activate', e => {
    console.log("Activating service worker...", e)
    return self.clients.claim()
})

self.addEventListener('fetch', e => {
    console.log("Fetching something ...", e)
    e.respondWith(fetch(e.request))
})