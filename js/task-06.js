const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onCheckInputText);

function onCheckInputText(event) {
      
    if (Number(event.currentTarget.value.trim().length)  === Number(inputEl.dataset.length)) {
        return inputEl.classList.add('valid');
        
    }

    return inputEl.classList.add('invalid');
    
}