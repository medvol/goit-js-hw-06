const elements = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
}

let counterValue = 0;

function onClickDecrement(event) {
    counterValue -= 1;
    return elements.value.textContent = counterValue;      
}

elements.decrementBtn.addEventListener('click', onClickDecrement);

function onClickIncrement(event) {
    counterValue += 1;
    return elements.value.textContent = counterValue;      
}

elements.incrementBtn.addEventListener('click', onClickIncrement);