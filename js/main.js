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

window.addEventListener('load', () => {
  showNextH4();
});

function showNextH4() {
  if (loadingTitleIndex < h4Elements.length) {
    h4Elements[loadingTitleIndex].style.display = "block";
    h4Elements[loadingTitleIndex].addEventListener("animationend", function () {
      showNextH4();
      this.style.display = "none";
      this.style.animation = "";
    });
    loadingTitleIndex++;
  }
}

const loadingPanel = document.getElementById('loading-panel');

loadingPanel.addEventListener('animationend', () => {
  setTimeout(() => {
    loadingPanel.style.display = 'none';
}, 4000);
});

/* NAV BUTTON COLOR */
const main = document.querySelector('main');
const sections = document.querySelectorAll('.snap-section');
const navButtons = document.querySelectorAll('.nav-button');

main.addEventListener('scroll', () => {
  const scrollTop = main.scrollTop;
  let activeSection = null;

  sections.forEach((section, index) => {
    const sectionStart = section.offsetTop;
    const sectionMiddle = sectionStart + section.offsetHeight / 2;
    const section20Percent = sectionStart + (section.offsetHeight * 0.2);
    const section80Percent = sectionStart + (section.offsetHeight * 0.8);

    if (scrollTop >= section20Percent && scrollTop < section80Percent) {
      paintButtonNav(index);
    }

    if (scrollTop >= (sectionStart - windowHeight / 2) && scrollTop < sectionMiddle) {
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

/* DINAMIC TEXT - SECTION 1 */
var phrases = [
  "Web Developer...",
  "Front-end Developer...",
  "Back-end Developer...",
];

// Elemento h2
var h2Element = document.querySelector("#dinamic-text");
var letterIndex = 0;

var intervalo = setInterval(function () {
  var fraseActual = phrases[letterIndex];

  writePhrase(fraseActual);

  letterIndex++;

  if (letterIndex === phrases.length) {
    letterIndex = 0;
  }

  setTimeout(function () {
    deletePhrase();
  }, fraseActual.length * 50 + 1000);
}, 5000);

function writePhrase(fraseActual) {
  for (var i = fraseActual.length; i >= 0; i--) {
    (function (i) {
      setTimeout(function () {
        h2Element.textContent = fraseActual.substring(0, i);
      }, (fraseActual.length - i) * 50);
    })(i);
  }
}

function deletePhrase() {
  for (var j = 0; j <= phrases[letterIndex].length; j++) {
    (function (j) {
      setTimeout(function () {
        h2Element.textContent = phrases[letterIndex].substring(0, j);
      }, j * 50);
    })(j);
  }
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

/* SECTION 4 */
const cardBoxes = document.querySelectorAll('.card-box');

cardBoxes.forEach((cardBox) => {
  const card = cardBox.querySelector('.card-project');
  const card_button = cardBox.querySelector('.card-button');
  card.addEventListener('click', () => {
    card.classList.toggle("rotated-card");
  });
  card_button.addEventListener('click', () => {
    card.classList.toggle("rotated-card");
  });
});

