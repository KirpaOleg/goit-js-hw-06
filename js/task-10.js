function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

const createBoxes = () => {
  let counter = Number(inputEl.value);
  let boxSize = 30;
  for (let a = 0; a < counter; a += 1) {
    const creatingBoxes = document.createElement('div');
    creatingBoxes.style.width = `${boxSize + a * 10}px`;
    creatingBoxes.style.height = `${boxSize + a * 10}px`;
    creatingBoxes.style.backgroundColor = getRandomHexColor();
    creatingBoxes.style.border = '1px solid black';
    creatingBoxes.style.marginTop = '5px';
    boxesEl.append(creatingBoxes);
  }
};

const destroyBoxes = () => {
  boxesEl.innerHTML = '';
  inputEl.value = '';
};

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);
