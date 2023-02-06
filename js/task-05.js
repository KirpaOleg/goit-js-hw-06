const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const getName = (event) => {
  if (inputEl.value === '') {
    return (outputEl.textContent = 'Anonymous');
  }
  return (outputEl.textContent = event.currentTarget.value);
};

inputEl.addEventListener('input', getName);
