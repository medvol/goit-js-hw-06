function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const containerBoxes = document.querySelector('#boxes');

// console.log(input)

function createBoxes(amount) {
  const elements = [];
  
  for (let i = 0; i < amount; i += 1){
    const colorBox = document.createElement('div');
    
    colorBox.style.width = 30 + 10*i + 'px';
    colorBox.style.height = 30 + 10 *i + 'px';
    colorBox.style.backgroundColor = getRandomHexColor();

    elements.push(colorBox);
       
  }

  containerBoxes.append(...elements);
   
}


createBtn.addEventListener('click', onClickCreateBtn)

function onClickCreateBtn(event) {

  createBoxes(input.value);

};

destroyBtn.addEventListener('click', onClickDestroyBtn);

function onClickDestroyBtn() {
  containerBoxes.innerHTML = '';
  
}