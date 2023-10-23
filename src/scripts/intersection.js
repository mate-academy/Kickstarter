'use strict';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

const callback = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.boundingClientRect.y > 0) {
      console.log('obs');

      switch (entry.target.getAttribute('data-target')) {
        case 'about': aboutAnim();
          break;
        case 'title': TitleAnim(entry.target);
          break;
      }
      observer.unobserve(entry.target);
    }
  });
};
const observer = new IntersectionObserver(callback, options);

const target = document.querySelectorAll('[data-target]');

target.forEach(el => {
  observer.observe(el);
})

function aboutAnim() {
  const featuresArticles = document.querySelectorAll('.features__article');

  featuresArticles.forEach(el => {
    el.style.transform = 'translateY(0)';
    el.style.opacity = '1';
  });
}

function TitleAnim(title) {
  title.style.transform = 'translateX(0)';
  title.style.opacity = '1';
}
