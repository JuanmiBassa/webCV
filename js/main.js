window.addEventListener('load', () => {
  
});

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

showNextH4();

function showNextH4() {
  if (loadingTitleIndex < h4Elements.length) {
    h4Elements[loadingTitleIndex].style.display = "block";
    setTimeout(showNextH4, 1550);
    h4Elements[loadingTitleIndex].addEventListener("animationend", function () {
      this.style.display = "none";
      this.style.animation = "";
    });
    loadingTitleIndex++;
  }
}

/* NAV BUTTON COLOR */
const main = document.querySelector('main');
const sections = document.querySelectorAll('.snap-section');
const navButtons = document.querySelectorAll('.nav-button');

main.addEventListener('scroll', () => {
  const scrollTop = main.scrollTop;
  let activeSection = null;

  sections.forEach((section, index) => {
    const sectionStart = section.offsetTop;
    const sectionEnd = sectionStart + section.offsetHeight;
    const sectionMiddle = sectionStart + section.offsetHeight / 2;
    const section20Percent = sectionStart + (section.offsetHeight * 0.2);
    const section80Percent = sectionStart + (section.offsetHeight * 0.8);

    if (scrollTop >= section20Percent && scrollTop < sectionMiddle) {
      section.classList.remove('ocult-container');
    } else if (scrollTop >= sectionMiddle && scrollTop < section80Percent) {
      paintButtonNav(index);
    } else if (scrollTop >= section80Percent && scrollTop < sectionEnd) {
      section.classList.add('ocult-container');
    }

    if (scrollTop >= sectionStart && scrollTop < sectionMiddle) {
      activeSection = index;
    }
  });

  if (activeSection !== null) {
    paintButtonNav(activeSection);
  }
});

function paintButtonNav(activeIndex) {
  navButtons.forEach((button, index) => {
    if (index == activeIndex) {
      button.classList.add('navSelected');
    } else {
      button.classList.remove('navSelected');
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
