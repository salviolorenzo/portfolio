let tagLine = document.querySelector('[data-tagLine]');
let i = 0;
let textArray = ['Software Developer', 'Musician', 'Leader', 'Creator'];
let txt = 'Software Developer'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    tagLine.textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

const header = document.querySelector('[data-header]');
const uMoodImg = document.getElementById('uMoodImg');
const budgetImg = document.getElementById('budgetImg');
const psImg = document.getElementById('psImg');

const home = document.querySelector('[data-home]');
const homeLink = document.querySelector('[data-home-link]');
const aboutMe = document.querySelector('[data-about-me]');
const aboutMeLink = document.querySelector('[data-about-me-link]');
const projects = document.querySelector('[data-projects]');
const projectsLink = document.querySelector('[data-projects-link]');
const skills = document.querySelector('[data-skills]');
const skillsLink = document.querySelector('[data-skills-link]');
const contact = document.querySelector('[data-contact]');
const contactLink = document.querySelector('[data-contact-link]');

const hamburger = document.querySelector('[data-hamburger]');
const mobileNav = document.querySelector('[data-mobile-nav]');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

uMoodImg.addEventListener('mouseover', () => {
  uMoodImg.src = 'https://media.giphy.com/media/YAXIGsoPJojzlVcbJP/giphy.gif';
});

uMoodImg.addEventListener('mouseout', () => {
  uMoodImg.src = '../images/desktopHome.png';
});

// budgetImg.addEventListener("mouseover", () => {
//   budgetImg.src = "";
// });

// budgetImg.addEventListener("mouseout", () => {
//   budgetImg.src = "../images/Landingimg.png";
// });

psImg.addEventListener('mouseover', () => {
  psImg.src = 'https://media.giphy.com/media/3d19VItGVqFZvfDMrd/giphy.gif';
});

psImg.addEventListener('mouseout', () => {
  psImg.src = '../images/desktopLanding.png';
});

homeLink.addEventListener('click', () => {
  home.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
aboutMeLink.addEventListener('click', () => {
<<<<<<< HEAD
  aboutMe.scrollIntoView({ behavior: 'smooth', block: 'start' });
=======
  aboutMe.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'
  });
>>>>>>> 139a17945534c54bc457c7697ba124ab6e0067c6
});
projectsLink.addEventListener('click', () => {
  projects.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
skillsLink.addEventListener('click', () => {
  skills.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
contactLink.addEventListener('click', () => {
  contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
