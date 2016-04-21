import dynamics from 'dynamics.js';

const body = document.querySelector('body');
const logo = document.querySelector('.svg--logo');
const p = document.querySelector('p');

dynamics.css(body, { scale: 1.1 });
dynamics.css(logo, { opacity: 0, translateY: 15 });
dynamics.css(p, { opacity: 0, translateY: -15 });

function animateElements() {
  // Logo
  dynamics.animate(logo, {
    opacity: 1,
    translateY: 0,
  }, {
    delay: 50,
    type: dynamics.spring,
  });

  // Paragraph
  dynamics.animate(p, {
    opacity: 1,
    translateY: 0,
  }, {
    delay: 50,
    type: dynamics.spring,
  });
}

function animateBody() {
  // Body
  dynamics.animate(body, {
    scale: 1,
  }, {
    duration: 1500,
    type: dynamics.easeInOut,
    complete: animateElements,
  });
}

export default {
  init: animateBody,
};
