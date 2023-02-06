const itemEl = document.querySelectorAll('.item');
const categoriesNum = `Number of categories: ${itemEl.length}`;
console.log(categoriesNum);

itemEl.forEach((item) => {
  console.log(`
    Category: ${item.firstElementChild.textContent}
    Elements: ${item.lastElementChild.children.length}`);
});
