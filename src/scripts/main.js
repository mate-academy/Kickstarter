'use strict';

function handleResponsiveLayout() {
  const breakpointTablet = 768;
  const breakpointLaptop = 1440;

  // элементы
  const featureItems = document.querySelectorAll('.features-highlight__item');
  const itemsToModify = Array.from(featureItems).slice(1, 4);

  const wirelessSpeakerMobile = document.querySelector(
    '.wireless-speaker-mobile',
  );
  const wirelessSpeakerTablet = document.querySelector(
    '.wireless-speaker-tablet',
  );

  const topBarSpecs = document.querySelectorAll('.top-bar__spec');
  const menuButton = document.querySelector('.menu__button');

  const designedForFutureMobile = document.querySelector(
    '.designed-for-future-mobile',
  );
  const designedForFutureTablet = document.querySelector(
    '.designed-for-future-tablet',
  );

  const lunaEyeMobile = document.querySelector('.luna-eye-mobile');
  const lunaEyeTablet = document.querySelector('.luna-eye-tablet');

  const headerNav = document.querySelector('.features-highlight__nav');

  const featuresMobile = document.querySelector('.features-mobile');
  const featuresTablet = document.querySelector('.features-tablet');
  const featuresLaptop = document.querySelector('.features-laptop');

  const footerLogo = document.querySelector('.footer__logo');
  const footerArrow = document.querySelector('.footer__arrow');

  const width = window.innerWidth;

  // MOBILE
  if (width < breakpointTablet) {
    wirelessSpeakerMobile.classList.remove('hidden');
    wirelessSpeakerTablet.classList.add('hidden');

    menuButton.classList.remove('hidden');

    designedForFutureMobile.classList.remove('hidden');
    designedForFutureTablet.classList.add('hidden');

    lunaEyeMobile.classList.remove('hidden');
    lunaEyeTablet.classList.add('hidden');

    featuresMobile.classList.remove('hidden');
    featuresTablet.classList.add('hidden');
    featuresLaptop.classList.add('hidden');
    footerLogo.classList.add('hidden');
    footerArrow.classList.add('hidden');

    topBarSpecs.forEach((spec) => spec.classList.add('hidden'));
    itemsToModify.forEach((item) => item.classList.add('hidden'));

    headerNav.classList.add('hidden');
    // TABLET
  } else if (width < breakpointLaptop) {
    wirelessSpeakerMobile.classList.add('hidden');
    wirelessSpeakerTablet.classList.remove('hidden');

    menuButton.classList.add('hidden');

    designedForFutureMobile.classList.add('hidden');
    designedForFutureTablet.classList.remove('hidden');

    lunaEyeMobile.classList.add('hidden');
    lunaEyeTablet.classList.remove('hidden');

    featuresMobile.classList.add('hidden');
    featuresTablet.classList.remove('hidden');
    featuresLaptop.classList.add('hidden');
    footerLogo.classList.remove('hidden');
    footerArrow.classList.remove('hidden');

    topBarSpecs.forEach((spec) => spec.classList.remove('hidden'));
    itemsToModify.forEach((item) => item.classList.remove('hidden'));

    headerNav.classList.add('hidden');
    // LAPTOP
  } else {
    wirelessSpeakerMobile.classList.add('hidden');
    wirelessSpeakerTablet.classList.remove('hidden');

    menuButton.classList.add('hidden');

    designedForFutureMobile.classList.add('hidden');
    designedForFutureTablet.classList.remove('hidden');

    lunaEyeMobile.classList.add('hidden');
    lunaEyeTablet.classList.remove('hidden');

    featuresMobile.classList.add('hidden');
    featuresTablet.classList.add('hidden');
    featuresLaptop.classList.remove('hidden');

    topBarSpecs.forEach((spec) => spec.classList.remove('hidden'));
    itemsToModify.forEach((item) => item.classList.remove('hidden'));

    headerNav.classList.remove('hidden');
  }
}

window.addEventListener('load', handleResponsiveLayout);
window.addEventListener('resize', handleResponsiveLayout);

// slider mobile
const featuresArrowLeft = document.querySelector(
  '.features__slider-arrow-left',
);
const featuresArrowRight = document.querySelector(
  '.features__slider-arrow-right',
);
const featuresNumberChange = document.querySelector(
  '.features__slider-number-change',
);
const featuresInfos = document.querySelectorAll('.features__info');

featuresArrowRight.addEventListener('click', () => {
  let number = Number(featuresNumberChange.textContent);

  if (number === featuresInfos.length) {
    return;
  }

  number++;
  featuresNumberChange.textContent = `0${number}`;

  featuresInfos.forEach((featuresInfo, index) => {
    featuresInfo.classList.toggle('hidden', index !== number - 1);
  });
});

featuresArrowLeft.addEventListener('click', () => {
  let number = Number(featuresNumberChange.textContent);

  if (number === 1) {
    return;
  }

  number--;
  featuresNumberChange.textContent = `0${number}`;

  featuresInfos.forEach((featuresInfo, index) => {
    featuresInfo.classList.toggle('hidden', index !== number - 1);
  });
});

// slider tablet
const featuresArrowLeftTablet = document.querySelector(
  '.features-tablet__slider-arrow-left',
);
const featuresArrowRightTablet = document.querySelector(
  '.features-tablet__slider-arrow-right',
);
const featuresNumberChangeTablet = document.querySelector(
  '.features-tablet__slider-number-change',
);
const featuresInfosTablet = document.querySelectorAll('.features-tablet__info');

featuresArrowRightTablet.addEventListener('click', () => {
  let number = Number(featuresNumberChangeTablet.textContent);

  if (number === featuresInfosTablet.length) {
    return;
  }

  number++;
  featuresNumberChangeTablet.textContent = `0${number}`;

  featuresInfosTablet.forEach((featuresInfo, index) => {
    featuresInfo.classList.toggle('hidden', index !== number - 1);
  });
});

featuresArrowLeftTablet.addEventListener('click', () => {
  let number = Number(featuresNumberChangeTablet.textContent);

  if (number === 1) {
    return;
  }

  number--;
  featuresNumberChangeTablet.textContent = `0${number}`;

  featuresInfosTablet.forEach((featuresInfo, index) => {
    featuresInfo.classList.toggle('hidden', index !== number - 1);
  });
});
