// navbar
const navbar = document.querySelector('.navbar');
const sectionCenter = document.querySelectorAll('.section-center');
// hero section
const emptyDiv = document.querySelector('.empty-div');
const scrollBtn = document.querySelector('.scroll-btn');
const heroTextContainer = document.querySelector('.hero-text');
// projects section
const projectsSection = document.querySelector('#projects-section');
const paragraph = document.querySelector('.paragraph');
const imageContainer = document.querySelector('.image-container');
const images = imageContainer.querySelectorAll('.card');
const projectsHeadline = document.querySelector('.projects-headline');
// about section
const aboutSection = document.querySelector('#about-section');
const aboutImage = document.querySelector('.about-info img');
const aboutHeader = document.querySelector('#about-section h2');
const aboutParagraph = document.querySelector('#about-section p');
// tech section
const techSection = document.querySelector('#tech-section');
const techList = document.querySelector('.tech-list');
const wantToKnowList = document.querySelector('.want-to-know-tech-list');

// const projectsSection = document.querySelector('#projects-section');
const main = document.querySelector('main');

// eventlisteners
window.addEventListener('scroll', parallaxScroll);
scrollBtn.addEventListener('click', scrollToProjects);

function parallaxScroll(e) {
  const scroll = window.pageYOffset;

  //   add parallax
  if (window.innerWidth >= 1200) {
    emptyDiv.style.height = `${scroll}px`;
    main.style.transform = `translate3d(0px, -${scroll}px, 0px)`;
    heroTextContainer.style.marginTop = `${scroll / 120}rem`;
    images.forEach((image) => {
      const position = (window.pageYOffset * image.dataset.rate) / 3;
      image.style.transform = `translate3d(0px, ${position}px, 0px`;
    });
  }
  //   remove parallax
  if (window.innerWidth < 1200) {
    emptyDiv.style.height = `0px`;
    main.style.transform = `translate3d(0px, 0px, 0px)`;
    images.forEach((image) => {
      image.style.transform = `translate3d(0px, 0px, 0px)`;
    });
  }

  //   check if element is in viewport
  if (isInViewport(projectsSection)) {
    setTimeout(() => {
      projectsHeadline.classList.add('fade-in');
      paragraph.classList.add('fade-in');
      imageContainer.classList.add('fade-in');
    }, 200);
  }
  if (isInViewport(aboutSection)) {
    setTimeout(() => {
      aboutImage.classList.add('fade-in');
      aboutHeader.classList.add('fade-in');
      aboutParagraph.classList.add('fade-in');
    }, 200);
  }
}

function scrollToProjects() {
  if (window.innerWidth < 1200) {
    window.scroll({
      top: window.innerHeight,
    });
  } else if (window.innerWidth >= 1200) {
    window.scroll({
      top: window.innerHeight / 2,
    });
  }
}

function isInViewport(element) {
  const elementRect = element.getBoundingClientRect();
  if (elementRect.top < window.innerHeight && elementRect.bottom > 0) {
    return true;
  }
}

async function displayTech() {
  const res = await fetch('../tech.stack.json');
  const data = await res.json();

  data.tech.map((item) => {
    const { name, image, status, text } = item;
    if (status === 'experience with') {
      techList.innerHTML += `
      <li>
        <img src="${image}" alt="${name}" />
        <div>
            <h4>${name}</h3>
        </div>
      </li>
      `;
    }
    if (status === 'want to know') {
      wantToKnowList.innerHTML += `
      <li>
        <img src="${image}" alt="${name}" />
        <div>
            <h4>${name}</h4>
        </div>
      </li>
      `;
    }
  });
}
displayTech();
//**************** */
//
//
// *mobile menu variables and functionality
//
//
const mobileMenu = document.querySelector('.mobile-menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('show-menu');
  menuBtn.classList.toggle('menu-is-open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && mobileMenu.className.includes('show-menu')) {
    mobileMenu.classList.remove('show-menu');
    menuBtn.classList.remove('menu-is-open');
  }
});

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(document.querySelectorAll('*'), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});
