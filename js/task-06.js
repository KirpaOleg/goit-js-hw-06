const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

const changeBlur = () => {
  inputEl.classList.remove('valid');
  inputEl.classList.remove('invalid');
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    return inputEl.classList.add('valid');
  }
  return inputEl.classList.add('invalid');
};

inputEl.addEventListener('input', changeBlur);
