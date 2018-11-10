'use strict';

import './menu.js';

const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', contactFormHandler);

// Contact form handler

function contactFormHandler(e) {
  e.preventDefault();

  const formData = new URLSearchParams(new FormData(contactForm));
  fetch('/contact', { method: 'POST', body: formData }).then(
    console.log('we did it!!'),
  );
}
