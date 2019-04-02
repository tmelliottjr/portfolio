'use strict';

import './menu.js';

// Tagline sequencer
const taglines = ['developer', 'husband', 'father'];
const tagline = document.querySelector('.self-tag');
let index = 0;

setInterval(() => {
  const currentOpacity = tagline.style.opacity;
  let opacity = 1;

  if (currentOpacity == 0) {
    opacity = 1;
    if (index > 2) index = 0;
    tagline.innerHTML = taglines[index];
    index += 1;
  } else if (currentOpacity == 1) {
    opacity = 0;
  } else {
    return;
  }

  tagline.style.opacity = opacity;
}, 2000);

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('preload');
});
