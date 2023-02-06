const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const names = ingredients.map((name) => {
  const itemOfIngredients = document.createElement('li');
  itemOfIngredients.classList.add('item');
  itemOfIngredients.textContent = name;
  return itemOfIngredients;
});

listEl.append(...names);
