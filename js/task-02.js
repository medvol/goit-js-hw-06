const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const ingredientsContainer = document.querySelector('#ingredients');

const makeListItem = ingredient => {
 
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = ingredient;

  return  listEl;

}

const elements = ingredients.map(makeListItem);

ingredientsContainer.append(...elements)

