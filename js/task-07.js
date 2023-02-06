const inputEl = document.querySelector('input');
const textEl = document.querySelector('#text');

const changeSize = () => (textEl.style.fontSize = `${inputEl.value}px`);

inputEl.addEventListener('input', changeSize);
