export const useForm = () => {
  const DOMElements = {
    form: document.querySelector('[data-form="form"]'),
  };

  DOMElements.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formElements = Array.from(e.target.elements);

    formElements.splice(formElements.length - 1, 1);

    formElements.forEach((element) => (element.value = ''));
  });
};
