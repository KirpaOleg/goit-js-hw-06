const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

const changeBlur = () => {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove('invalid');
    return inputEl.classList.add('valid');
  }
  return inputEl.classList.add('invalid');
};

inputEl.addEventListener('input', changeBlur);
