/* WINDOW SIZE */
let windowWidth = 0;
let windowHeight = 0;
getWindowSize();
window.addEventListener('resize', getWindowSize);
function getWindowSize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    if (windowHeight <= 1024) {
        windowHeight -= 80;
    }
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

main.addEventListener('scroll', () => {
    const scrollTop = main.scrollTop;

    if (scrollTop < windowHeight - 100) {
        paintBottonNav(0);
    } else if (scrollTop >= windowHeight - 100 && scrollTop < 2 * windowHeight - 100) {
        paintBottonNav(1);
    } else if (scrollTop >= 2 * windowHeight - 100 && scrollTop < 3 * windowHeight - 100) {
        paintBottonNav(2);
    } else if (scrollTop >= 3 * windowHeight - 100 && scrollTop < 4 * windowHeight - 100) {
        paintBottonNav(3);
    } else if (scrollTop >= 4 * windowHeight - 100 && scrollTop < 5 * windowHeight - 100) {
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
