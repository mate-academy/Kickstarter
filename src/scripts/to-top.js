const ID_BTN_TO_TOP = 'to-top';
const CLASS_VISIBLE_BTN_TO_TOP = 'page__button--visible';
const CLASS_LOGO = 'logo';

const toTopBtn = document.getElementById(ID_BTN_TO_TOP);
const logo = document.querySelector(`.${CLASS_LOGO}`);

const toggleToTop = () => {
  const triggerPoint = window.innerHeight * 0.8;

  if (window.scrollY > triggerPoint) {
    toTopBtn.classList.add(CLASS_VISIBLE_BTN_TO_TOP);
  } else {
    toTopBtn.classList.remove(CLASS_VISIBLE_BTN_TO_TOP);
  }
};

const handleToTopBtnClick = (e) => {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  logo.focus();
};

toTopBtn.addEventListener('click', handleToTopBtnClick);

window.addEventListener('scroll', toggleToTop);
