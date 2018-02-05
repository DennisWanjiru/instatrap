let defferedPrompt;
if("serviceWorker" in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(() => console.log("Service Worker Registered!"))
}

window.addEventListener('beforeinstallprompt', e => {
    console.log("Before install Prompt")
    e.preventDefault()
    defferedPrompt = e;
});