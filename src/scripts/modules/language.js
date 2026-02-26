export const initLanguage = () => {
  const currentLang = document.documentElement.lang;
  const savedLang = window.localStorage.getItem('siteLang');

  if (savedLang && savedLang !== currentLang) {
    const isUkPage = window.location.href.includes('index-uk.html');

    if (savedLang === 'uk' && !isUkPage) {
      window.location.replace('index-uk.html');
    } else if (savedLang === 'en' && isUkPage) {
      window.location.replace('index.html');
    }
  }

  const langLinks = document.querySelectorAll('.navbar__item--language a');

  langLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetHref = link.getAttribute('href');
      const selectedLang = targetHref.includes('index-uk.html') ? 'uk' : 'en';

      window.localStorage.setItem('siteLang', selectedLang);
      document.body.classList.add('page__body--fade-out');

      setTimeout(() => {
        window.location.href = targetHref;
      }, 300);
    });
  });
};
