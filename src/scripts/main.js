import preventSubmit from './prevent-submit';
import * as scrollUpArrow from './scroll-up';
import * as activeLink from './active-menu-link';
import * as matchMedia from './match-media';
import * as featureSlider from './feature-slider';

preventSubmit();
scrollUpArrow();
activeLink();
matchMedia();
featureSlider();

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
