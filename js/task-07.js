const inputEl = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

textSize.style.fontSize = inputEl.value;

 console.log(textSize.style.fontSize)

inputEl.addEventListener('input', scaleChange);

function scaleChange(event) {
    console.log(textSize.style.fontSize)
    textSize.style.fontSize = event.currentTarget.value;
}