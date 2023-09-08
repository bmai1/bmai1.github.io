const sd1 = document.querySelector('.scroll-div1');
const sd2 = document.querySelector('.scroll-div2');
const sd3 = document.querySelector('.scroll-div3');
const welcomeDiv = document.querySelector('.welcome');


window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;
   // Calculate the parallax effect for each layer
  const parallax = scrollPosition * 0.2;

  document.querySelector('.layer1').style.transform = `translateY(${parallax * 4}px)`;
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
    welcomeDiv.style.opacity = 0;
  } 
  else if (scrollPosition >= window.innerHeight * 2.5 && scrollPosition < window.innerHeight * 5) {
    sd1.classList.remove('active');
    sd2.classList.add('active');
    sd3.classList.remove('active');
  }
  else if (scrollPosition >= window.innerHeight * 5) {
    sd1.classList.remove('active');
    sd2.classList.remove('active');
    sd3.classList.add('active');
  }
  else {
    sd1.classList.remove('active');
    sd2.classList.remove('active');
    sd3.classList.remove('active');
    welcomeDiv.style.opacity = 1; // Reset the welcome div's opacity
  }
});
