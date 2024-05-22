export const useForm = () => {
  const DOMElements = {
    form: document.querySelector('[data-form="form"]'),
  };

  DOMElements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    location.reload();
  });
};
