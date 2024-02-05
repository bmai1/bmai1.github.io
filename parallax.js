const sd1 = document.querySelector('.scroll-div1');
const sd2 = document.querySelector('.scroll-div2');
const sd3 = document.querySelector('.scroll-div3');
const ed  = document.querySelector('.end-div');
const welcomeDiv = document.querySelector('.welcome');


const layers = document.querySelectorAll('.lax');

window.addEventListener('scroll', () => {
  
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  if (scrollPosition < window.innerHeight * 0.5) {
    // Calculate the parallax effect for each layer
    const parallax = scrollPosition * 0.2;

    // document.querySelector('.sky').style.filter = `brightness(calc(100% - ${parallax * 0.7}%))`;
    document.querySelector('.abt-me').style.opacity = `calc(100% - ${parallax * 1.8}%)`;
    document.querySelector('.sky').style.opacity = `calc(100% - ${parallax}%)`;

    layers.forEach((layer, index) => {
      const translateY = parallax * (3 - index * 0.25); // Adjust as needed
      layer.style.transform = `translateY(${translateY}px)`;
    });

    document.querySelector('.layer1-ext').style.transform = `translateY(calc(${parallax * 3}px + 100vh))`;
    document.querySelector('.layer2-ext').style.transform = `translateY(calc(${parallax * 2.5}px + 100vh))`;


    const welcomeParallax = scrollPosition * 0.9;
    document.querySelector('.welcome').style.transform = `translateY(calc(10% + ${welcomeParallax}px))`;
  }

  const r = document.querySelector('.rm'); // the one button the glitches out
  console.log(r);

  if (scrollPosition >= window.innerHeight * 0.5 && scrollPosition < window.innerHeight * 1.5) {
    
    r.style.opacity = 0;

    sd1.classList.add('active');
    sd2.classList.remove('active');
    // sd3.classList.remove('active');
    // ed.classList.remove('active');
    welcomeDiv.style.opacity = 0;
  } 
  else if (scrollPosition >= window.innerHeight * 1.5 && scrollPosition < window.innerHeight * 2.5) {
    sd1.classList.remove('active');
    sd2.classList.add('active');
    sd3.classList.remove('active');
    // ed.classList.remove('active');
  }
  else if (scrollPosition >= window.innerHeight * 2.5 && scrollPosition < window.innerHeight * 3.5) {
    // sd1.classList.remove('active');
    sd2.classList.remove('active');
    sd3.classList.add('active');
    ed.classList.remove('active');
  }
  else if (scrollPosition >= window.innerHeight * 3.5) {
    // sd1.classList.remove('active');
    // sd2.classList.remove('active');
    sd3.classList.remove('active');
    ed.classList.add('active');
  }
  else {
    r.style.opacity = 1;
    sd1.classList.remove('active');
    sd2.classList.remove('active');
    sd3.classList.remove('active');
    ed.classList.remove('active');
    welcomeDiv.style.opacity = 1; // Reset the welcome div's opacity
  }
});
  
