// const body = document.querySelector('body');
// navbar
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar a');
const sectionCenter = document.querySelectorAll('.section-center');
// hero section
const vantaCanvas = document.querySelector('#vanta-canvas');
const emptyDiv = document.querySelector('.empty-div');
const scrollBtn = document.querySelector('.scroll-btn');
const heroTextContainer = document.querySelector('.hero-text');
const headline = document.querySelector('.hero-text h1');
// projects section
const projectsSection = document.querySelector('#projects-section');
const paragraph = document.querySelector('.paragraph');
const imageContainer = document.querySelector('.image-container');
const images = imageContainer.querySelectorAll('.card');
const projectsHeadline = document.querySelector('.projects-headline');
const projectSectionBorderTop = document.querySelector(
  '.project-section-border-top'
);
// about section
const aboutSection = document.querySelector('#about-section');
const aboutInfo = document.querySelector('.about-info');
const aboutImage = document.querySelector('.about-info img');
const aboutHeader = document.querySelector('#about-section h2');
const aboutParagraph = document.querySelectorAll('#about-section p');
const aboutText = document.querySelector('.about-text');
const aboutSectionBorderTop = document.querySelector(
  '.about-section-border-top'
);
// tech section
const techSection = document.querySelector('#tech-section');
const innerTechSection = document.querySelector('.inner-tech-section');
const techHeadline = document.querySelector('#tech-section h2');
const allTechLists = document.querySelectorAll('#tech-section ul');
const techList = document.querySelector('.tech-list');
const wantToKnowList = document.querySelector('.want-to-know-tech-list');
const innerTechSectionBorderTop = document.querySelector(
  '.inner-section-border-top'
);
const techSectionH3 = document.querySelectorAll('#tech-section h3');

// const projectsSection = document.querySelector('#projects-section');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

// eventlisteners
window.addEventListener('scroll', parallaxScroll);
window.addEventListener('scroll', highlightNavigation);
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1150 && window.innerWidth <= 1250) {
    parallaxScroll();
  }
});
scrollBtn.addEventListener('click', scrollToProjects);

let scroll = window.pageYOffset / 2;
function parallaxScroll() {
  scroll = window.pageYOffset / 2;
  emptyDiv.style.height = `${scroll}px`;
  main.style.transform = `translate3d(0px, -${scroll}px, 0px)`;
  heroTextContainer.style.transform = `translateY(${scroll / 1.6}px)`;
  //   add parallax
  if (window.innerWidth >= 1200) {
    images.forEach((image) => {
      const position = (scroll * image.dataset.rate) / 2;
      image.style.transform = `translate3d(0px, ${position}px, 0px`;
    });
  }

  //   remove parallax
  if (window.innerWidth < 1200) {
    // emptyDiv.style.height = `0px`;
    // main.style.transform = `translate3d(0px, 0px, 0px)`;
    // console.log(scroll);
    images.forEach((image) => {
      image.style.transform = `translate3d(0px, 0px, 0px)`;
    });
  }

  //   check if element is in viewport
  if (isInViewport(projectsSection)) {
    setTimeout(() => {
      fadeIn(projectsHeadline);
      fadeIn(paragraph);
      fadeIn(imageContainer);
      fadeIn(projectSectionBorderTop);
    }, 200);
  }
  if (isInViewport(aboutInfo)) {
    setTimeout(() => {
      fadeIn(aboutImage);
      fadeIn(aboutHeader);
      fadeIn(aboutText);
      fadeIn(aboutSectionBorderTop);
    }, 200);
  }
  if (isInViewport(techList)) {
    setTimeout(() => {
      fadeIn(techHeadline);
      fadeIn(innerTechSectionBorderTop);
      techSectionH3.forEach((h3) => {
        fadeIn(h3);
      });
      allTechLists.forEach((item) => {
        const listItems = item.querySelectorAll('li');
        listItems.forEach((listItem, index) => {
          const delay = index * 100;
          setTimeout(() => {
            fadeIn(listItem);
          }, delay);
        });
      });
    }, 200);
  }
}
parallaxScroll();
function fadeIn(element) {
  element.classList.add('fade-in');
}

function scrollToProjects() {
  const canvasRect = vantaCanvas.getBoundingClientRect();
  const headlineRect = headline.getBoundingClientRect();

  window.scroll({
    top: canvasRect.height / 1.5 - headlineRect.height,
  });
}

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (link.className.includes('home')) {
      window.scroll({
        top: 0,
      });
    }

    if (link.className.includes('projects')) {
      scrollToProjects();
    }
    if (link.className.includes('about')) {
      const elemOffset = aboutSection.offsetTop;
      window.scroll({
        top: elemOffset - window.innerWidth / 2,
      });
      if (window.innerWidth >= 360) {
        window.scroll({
          top: elemOffset - window.innerWidth,
        });
      }
      if (window.innerWidth > 380) {
        window.scroll({
          top: elemOffset - window.innerWidth * 0.9,
        });
      }
      if (window.innerWidth > 541) {
        window.scroll({
          top: elemOffset + window.innerHeight / 6,
        });
      }
      if (window.innerWidth > 768) {
        window.scroll({
          top: elemOffset + window.innerHeight / 10,
        });
      }
    }
    if (link.className.includes('tech')) {
      const elemOffset = techSection.offsetTop;
      window.scroll({
        top: elemOffset - window.innerHeight / 2,
      });
      if (window.innerWidth >= 360) {
        window.scroll({
          top: elemOffset - window.innerHeight / 2,
        });
      }
      if (window.innerWidth > 400) {
        window.scroll({
          top: elemOffset - window.innerHeight * 0.7,
        });
      }
      if (window.innerWidth > 541) {
        window.scroll({
          top: elemOffset,
        });
      }
    }
  });
});

function isInViewport(element) {
  const elementRect = element.getBoundingClientRect();
  if (elementRect.top < window.innerHeight && elementRect.bottom > 0) {
    return true;
  }
}

function highlightNavigation() {
  let homePercentage = document.body.scrollHeight * 0.18;
  let aboutPercentage = document.body.scrollHeight * 0.5;
  let techPersentage = document.body.scrollHeight * 0.65;
  const centerOfScreen = window.pageYOffset + window.innerHeight / 2;

  if (window.innerWidth >= 360) {
    aboutPercentage = document.body.scrollHeight * 0.55;
    techPersentage = document.body.scrollHeight * 0.7;
  }
  // if (window.innerWidth > 530) {
  //   doc20PercentOfHeight = document.body.scrollHeight * 0.18;
  // }
  // if (window.innerWidth > 768) {
  //   doc20PercentOfHeight = document.body.scrollHeight * 0.25;
  // }
  if (centerOfScreen > techPersentage) {
    makeActive('tech');
    console.log('tech');
  } else if (centerOfScreen > aboutPercentage) {
    makeActive('about');
    console.log('about');
  } else if (centerOfScreen > homePercentage) {
    makeActive('projects');
    console.log('projects');
  } else if (centerOfScreen < homePercentage) {
    makeActive('home');
    console.log('home');
    // console.log('center of screen', centerOfScreen);
    // console.log('doc 20', doc20PercentOfHeight);
  }
}
highlightNavigation();

function makeActive(activeLink) {
  const menuItem = document.querySelectorAll('.menu-item');
  menuItem.forEach((item) => {
    if (item.className.includes(activeLink)) {
      item.classList.add('active-page-dark');
    } else {
      item.classList.remove('active-page-dark');
    }
  });
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
const menuLinks = document.querySelectorAll('.mobile-menu a');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show-menu');
    menuBtn.classList.remove('menu-is-open');
  });
});

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

// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(document.querySelectorAll('*'), function (el) {
//   if (el.offsetWidth > docWidth) {
//     console.log(el);
//   }
// });

// let body = document.body,
//   html = document.documentElement,
//   height = Math.max(
//     body.scrollHeight,
//     body.offsetHeight,
//     html.clientHeight,
//     html.scrollHeight,
//     html.offsetHeight
//   );
// console.log(height);
