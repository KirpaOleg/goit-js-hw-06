const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const getName = (event) => {
  if (inputEl.value.trim() === '') {
    return (outputEl.textContent = 'Anonymous');
  }
  return (outputEl.textContent = event.currentTarget.value);
};

inputEl.addEventListener('input', getName);
