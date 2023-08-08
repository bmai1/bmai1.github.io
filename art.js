const viewer = document.getElementById('viewer');
let viewerActive = false;
const openViewer = (image) => {
    if (!viewerActive) {
        document.body.style.overflow = 'hidden';
        viewer.style.display = "block";
        viewer.innerHTML = `<img class="fadein" src="images/${image}" style="display: block; height: 95%; margin: auto;">`;
        viewerActive = true;
    }
}
const closeViewer = () => {
    document.body.style.overflow = 'auto';
    viewerActive = false;
    viewer.innerHTML = '';
    viewer.style.display = "none";
}