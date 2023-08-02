// Preload images
var imagesToPreload = [
"images/bg3.jpg",
"images/bg4.jpg",
"images/99.png",
"images/rie.png",
"images/tsu.png",
"images/sengoku.png",
"images/senjo.png",
"images/cum.jpg",
];

window.addEventListener("load", preloadImages);

function preloadImages() {
    for (var i = 0; i < imagesToPreload.length; i++) {
        var image = new Image();
        image.src = imagesToPreload[i];
    }
}
