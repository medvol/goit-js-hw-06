const elements = {
    input: document.querySelector('#name-input'),
    namLabel: document.querySelector('#name-output'),
}

elements.input.addEventListener('input', onTextInput);

function onTextInput(event) {
          
    if (event.currentTarget.value.trim() === '') {
        return elements.namLabel.textContent = 'Anonymous';
           
    }

     return elements.namLabel.textContent = event.currentTarget.value.trim();
    
}