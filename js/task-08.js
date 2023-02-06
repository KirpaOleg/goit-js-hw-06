const formEl = document.querySelector('.login-form');

const createUserData = (event) => {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = {email, password};

  if (!email || !password) {
    alert('Всі поля повинні бути заповнені / All fields must be filled');
  }
  console.log(formData);
  event.currentTarget.reset();
};

formEl.addEventListener('submit', createUserData);
