const inputEl = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');


textSize.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input', scaleChange);

function scaleChange(event) {
    
    textSize.style.fontSize = `${event.currentTarget.value}px`;
}


