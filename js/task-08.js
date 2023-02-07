const formEl = document.querySelector('.login-form');

const createUserData = (event) => {
  event.preventDefault();
  const email = event.currentTarget.email.value.trim();
  const password = event.currentTarget.password.value;
  const formData = {email, password};

  if (!email || !password) {
    return alert('Всі поля повинні бути заповнені / All fields must be filled');
  }
  console.log(formData);
  event.currentTarget.reset();
};

formEl.addEventListener('submit', createUserData);
