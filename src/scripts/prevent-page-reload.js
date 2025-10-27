document
  .getElementById('message-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('#', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        window.alert('Form submitted successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        window.alert('There was an error submitting the form.');
      });
  });
