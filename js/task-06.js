const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onCheckInputText);

function onCheckInputText(event) {
      
    if (event.currentTarget.value.trim().length   !== parseInt(inputEl.dataset.length)) {
        
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');

    }

    if (event.currentTarget.value.trim().length   === parseInt(inputEl.dataset.length)) {
              
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');

    }

}