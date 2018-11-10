const sections = document.querySelectorAll('.anchor');
const scrollOffset = 250;

// Menu Toggle
function menuToggle() {
  const menuButton = document.querySelector('#menu-button');
  const navLinks = document.querySelector('.nav-links');
  const nav = document.querySelector('nav');

  if (menuButton.classList.contains('expand')) {
    menuButton.classList.remove('expand');
    nav.style.paddingBottom = '0px';
    navLinks.style.top = '-100px';
  } else {
    menuButton.classList.add('expand');
    nav.style.paddingBottom = '125px';
    // Wait for menu to expand before changing visible position
    setTimeout(() => {
      navLinks.style.top = '75px';
    }, 100);
  }
}

// Scroll Handler
function scrollHandler() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (document.querySelector('#menu-button').classList.contains('expand')) {
    menuToggle();
  }

  if (scrollTop <= scrollOffset) {
    document.querySelector('header').classList.remove('hidden');
  } else {
    document.querySelector('header').classList.add('hidden');
  }
}

// Scroll Spy
window.onscroll = scrollHandler;
document.body.ontouchmove = scrollHandler;

// Hamburger Menu
document.querySelector('#menu-button').addEventListener('click', () => {
  menuToggle();
});