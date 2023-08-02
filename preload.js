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

// Call the preloadImages function when the window has finished loading
window.addEventListener("load", preloadImages);

function preloadImages() {
    for (var i = 0; i < imagesToPreload.length; i++) {
        var image = new Image();
        image.src = imagesToPreload[i];
    }
    let url = window.location.href;
    let fileName = url.substring(url.lastIndexOf('/') + 1);
    if (fileName == "index.html") {
        const h1 = document.getElementById('honey');
        const h2 = document.getElementById('honey2');
        h1.style.opacity = "0.95";
        h2.style.opacity = "0.95";
    }
}
