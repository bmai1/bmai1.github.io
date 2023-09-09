const sd1 = document.querySelector('.scroll-div1');
const sd2 = document.querySelector('.scroll-div2');
const sd3 = document.querySelector('.scroll-div3');
const ed  = document.querySelector('.end-div');
const welcomeDiv = document.querySelector('.welcome');


window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;
   // Calculate the parallax effect for each layer
  const parallax = scrollPosition * 0.2;

  // document.querySelector('.sky').style.filter = `brightness(calc(100% - ${parallax * 0.7}%))`;
  document.querySelector('.sky').style.opacity = `calc(100% - ${parallax * 0.2}%)`;
  document.querySelector('.skyset').style.opacity = `${parallax * 0.3}%`;

  
  document.querySelector('.sun').style.transform = `translateY(${parallax * 7}px)`;
  document.querySelector('.sun').style.filter = `saturate(calc(100% + ${parallax * 7}%))`;
  
  document.querySelector('.layer1').style.transform = `translateY(${parallax * 3}px)`;
  document.querySelector('.layer2').style.transform = `translateY(${parallax * 1.3}px)`;
  document.querySelector('.layer3').style.transform = `translateY(${parallax * 2}px)`;
  document.querySelector('.layer4').style.transform = `translateY(${parallax * 1}px)`;
  document.querySelector('.gray').style.transform = `translateY(calc(${parallax * 1}px + 100vh))`;

  const welcomeParallax = scrollPosition * 0.9; // Adjust the factor for slower scrolling
  // Apply the parallax effect to the .welcome div
  document.querySelector('.welcome').style.transform = `translateY(calc(10% + ${welcomeParallax}px))`;
    


  if (scrollPosition >= window.innerHeight * 0.5 && scrollPosition < window.innerHeight * 2.5) {
    sd1.classList.add('active');
    sd2.classList.remove('active');
    sd3.classList.remove('active');
    ed.classList.remove('active');
    welcomeDiv.style.opacity = 0;
  } 
  else if (scrollPosition >= window.innerHeight * 2.5 && scrollPosition < window.innerHeight * 4) {
    sd1.classList.remove('active');
    sd2.classList.add('active');
    sd3.classList.remove('active');
    ed.classList.remove('active');
    document.querySelector('.sun').style.display = "none";
  }
  else if (scrollPosition >= window.innerHeight * 4 && scrollPosition < window.innerHeight * 5) {
    sd1.classList.remove('active');
    sd2.classList.remove('active');
    sd3.classList.add('active');
    ed.classList.remove('active');
  }
  else if (scrollPosition >= window.innerHeight * 5) {
    sd1.classList.remove('active');
    sd2.classList.remove('active');
    sd3.classList.remove('active');
    ed.classList.add('active');
  }
  else {
    document.querySelector('.sun').style.display = "block";
    sd1.classList.remove('active');
    sd2.classList.remove('active');
    sd3.classList.remove('active');
    ed.classList.remove('active');
    welcomeDiv.style.opacity = 1; // Reset the welcome div's opacity
  }
});
