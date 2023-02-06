const incrementEl = document.querySelector('[data-action = "increment"]');
const decrementEl = document.querySelector('[data-action = "decrement"]');
const resultEl = document.querySelector('#value');

let counterValue = 0;
const onIncrementClick = () => {
  resultEl.textContent = counterValue += 1;
};
const onDecrementClick = () => {
  resultEl.textContent = counterValue -= 1;
};

incrementEl.addEventListener('click', onIncrementClick);
decrementEl.addEventListener('click', onDecrementClick);
