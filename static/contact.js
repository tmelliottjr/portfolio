'use strict';

import './menu.js';

const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', contactFormHandler);

// Contact form handler

function contactFormHandler(e) {
  e.preventDefault();

  const formData = new FormData(contactForm);
  console.log(new URLSearchParams(formData).toString());
  fetch('/contact', { method: 'POST' }).then(console.log('we did it!'));
}
