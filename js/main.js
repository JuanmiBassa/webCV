/* WINDOW SIZE */
let windowWidth = 0;
let windowHeight = 0;
getWindowSize();
window.addEventListener('resize', getWindowSize);
function getWindowSize() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
}

/* LOADING PANEL */
const h4Elements = document.querySelectorAll(".loading-title");
let loadingTitleIndex = 0;

function showNextH4() {
  if (loadingTitleIndex < h4Elements.length) {
    h4Elements[loadingTitleIndex].style.display = "block";
    setTimeout(showNextH4, 1600);
    h4Elements[loadingTitleIndex].addEventListener("animationend", function () {
      this.style.display = "none";
      this.style.animation = "";
    });
    loadingTitleIndex++;
  }
}

showNextH4();

/* NAV BUTTON COLOR */
const nav_buttons = document.querySelectorAll('.nav-button');
const main = document.querySelector('main');
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');
const section5 = document.querySelector('#section5');

var section1Start = 0;
var section1End = section1Start + section1.offsetHeight;
var section2Start = section1End;
var section2End = section2Start + section2.offsetHeight;
var section3Start = section2End;
var section3End = section3Start + section3.offsetHeight;

var section4Start = section3End;
var section4End = section4Start + section4.offsetHeight;
var section5Start = section4End;
var section5End = section5Start + section5.offsetHeight;

main.addEventListener('scroll', () => {
  const scrollTop = main.scrollTop;

  if (scrollTop >= section1Start && scrollTop < section1End) {
    paintBottonNav(0);
    section1.classList.remove('ocult-container');
  } else if (scrollTop >= section2Start && scrollTop < section2End) {
    paintBottonNav(1);
    section1.classList.add('ocult-container');
  } else if (scrollTop >= section3Start && scrollTop < section3End) {
    paintBottonNav(2);
  } else if (scrollTop >= section4Start && scrollTop < section4End) {
    paintBottonNav(3);
  } else if (scrollTop >= section5Start && scrollTop < section5End) {
    paintBottonNav(4);
  }
});

function paintBottonNav(numNavButton) {
  nav_buttons.forEach((element, index) => {
    if (index == numNavButton) {
      element.classList.add('navSelected');
    } else {
      element.classList.remove('navSelected');
    }
  });
}

/* CAROUSEL - SECTION 2 */
const carousels = document.querySelectorAll('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let carouselIndex = 0;

function updateCarousel() {
  const offset = carouselIndex * 100;
  carousels.forEach((carousel, i) => {
    carousel.style.transform = `translateX(-${offset}%)`;
    if (i === carouselIndex) {
      carousel.classList.add('active');
    } else {
      carousel.classList.remove('active');
    }
  });
}

prevButton.addEventListener('click', () => {
  if (carouselIndex > 0) {
    carouselIndex--;
    updateCarousel();
  }
});

nextButton.addEventListener('click', () => {
  if (carouselIndex < carousels.length - 1) {
    carouselIndex++;
    updateCarousel();
  }
});
