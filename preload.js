
// Preload images
var imagesToPreload = [
"images/bg3.jpg",
"images/bg4.jpg",
"images/99.png",
"images/rie.png",
"images/tsu.png"
];

function preloadImages() {
for (var i = 0; i < imagesToPreload.length; i++) {
    var image = new Image();
    image.src = imagesToPreload[i];
}
}

// Call the preloadImages function when the window has finished loading
window.addEventListener("load", preloadImages);
