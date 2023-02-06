function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorEl = document.querySelector('button.change-color');
const colorValueEl = document.querySelector('span.color');

const changeColorBgc = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorValueEl.textContent = document.body.style.backgroundColor;
};

btnChangeColorEl.addEventListener('click', changeColorBgc);
