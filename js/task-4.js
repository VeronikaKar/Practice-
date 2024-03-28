const formEl = document.querySelector('.login-form');

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const emailInput = form.elements.email.value;
  const passwordInput = form.elements.password.value;

  if (emailInput === '' || passwordInput === '') {
    alert('All form fields must be filled in');
    return;
  }

  const { email, password } = form.elements;
  const info = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(info);
  form.reset();
}

formEl.addEventListener('submit', handleSubmit);