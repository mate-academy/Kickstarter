import translations from '../../data/data.json';

const langButtons = document.querySelectorAll('.language-switcher__button');
const elementsToTranslate = document.querySelectorAll('[data-i18n]');
const pageTitleElement = document.querySelector('title');

const getNestedTranslation = (obj, key) => {
  const pathParts = key.split('.');
  return pathParts.reduce((currentObj, part) => {
    return currentObj ? currentObj[part] : undefined;
  }, obj);
}

const translateElements = lang => {
  elementsToTranslate.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getNestedTranslation(translations[lang], key);

    if (translation !== undefined) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.setAttribute('placeholder', translation);
      }
      else {
        element.innerHTML = translation;
      }
    }
  });

  if (pageTitleElement && translations[lang] && translations[lang].page && translations[lang].page.title) {
    pageTitleElement.textContent = translations[lang].page.title;
  }

  langButtons.forEach(button => {
    if (button.dataset.langCode === lang) {
      button.classList.add('language-switcher__button--active');
    } else {
      button.classList.remove('language-switcher__button--active');
    }
  });
}

export const initTranslationHandler = () => {
  const savedLang = localStorage.getItem('selectedLang') || 'en';
  translateElements(savedLang);

  langButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const selectedLang = e.target.dataset.langCode;
      translateElements(selectedLang);
      localStorage.setItem('selectedLang', selectedLang);
    });
  });
}
