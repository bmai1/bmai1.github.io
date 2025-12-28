const layers = document.querySelectorAll('.mountains');
const nameDiv = document.getElementById('name');
let scrollY = 0;
let ticking = false;

function update() {
  layers.forEach((layer, i) => {
    const speed = 0.3 - i * 0.07;
    layer.style.transform = `translateY(${scrollY * speed}px)`;
  });
  nameDiv.style.transform = `translateY(${scrollY}px)`;
  ticking = false;
}

window.addEventListener('scroll', () => {
  scrollY = window.scrollY;
  if (!ticking) {
    requestAnimationFrame(update);
    ticking = true;
  }
}, { passive: true });