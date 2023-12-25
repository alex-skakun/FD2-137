document.addEventListener('DOMContentLoaded', function () {
  const customerNameForm = document.forms.namedItem('customerName');

  customerNameForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    if (customerNameForm !== null) {
      const formData = new FormData(customerNameForm);

      const customerName = {
        lastName: formData.get('lastName'),
        firstName: formData.get('firstName'),
        middleName: formData.get('middleName'),
        age: formData.get('age'),
        sex: formData.get('sex'),
      };

      console.log(customerName);
    }
  });
});
