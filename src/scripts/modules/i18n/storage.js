const KEY = 'lang';

export const getStoredLanguage = () => localStorage.getItem(KEY);
export const setStoredLanguage = (lang) => localStorage.setItem(KEY, lang);
