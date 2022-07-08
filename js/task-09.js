function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', changeColor);

function changeColor(element) {

  const color = getRandomHexColor();

  document.body.style.background = `${color}`;

  textColor.textContent = color;
  
}
