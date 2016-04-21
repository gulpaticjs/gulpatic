import dynamics from 'dynamics.js';

const body = document.querySelector('body');
const logo = document.querySelector('[data-js-logo]');
const title = document.querySelector('[data-js-title]');
const twitterLink = document.querySelector('[data-js-twitter]');
const githubLogo = document.querySelector('[data-js-github-logo] svg');

dynamics.css(body, { scale: 1.1 });
dynamics.css(logo, { opacity: 0, translateY: 15 });
dynamics.css(title, { opacity: 0, translateY: -15 });
dynamics.css(githubLogo, { opacity: 0, translateY: -15 });
dynamics.css(twitterLink, { opacity: 0 });

function animateContent() {
  // Logo
  dynamics.animate(logo, {
    opacity: 1,
    translateY: 0,
  }, {
    delay: 50,
    type: dynamics.spring,
  });

  // Paragraph
  dynamics.animate(title, {
    opacity: 1,
    translateY: 0,
  }, {
    delay: 50,
    type: dynamics.spring,
  });

  // Github logo
  dynamics.animate(githubLogo, {
    opacity: 1,
    translateY: 0,
  }, {
    delay: 750,
    type: dynamics.spring,
    frequency: 140,
    friction: 220,
  });

  // Twitter link
  dynamics.animate(twitterLink, {
    opacity: 1,
  }, {
    delay: 750,
    type: dynamics.easeIn,
  });
}

function animateBody() {
  // Body
  dynamics.animate(body, {
    opacity: 1,
    scale: 1,
  }, {
    duration: 1500,
    type: dynamics.easeInOut,
    complete: animateContent,
  });
}

export default {
  init: animateBody,
};
