const elements = {
    input: document.querySelector('#name-input'),
    namLabel: document.querySelector('#name-output'),
}

elements.input.addEventListener('input', onTextInput);

function onTextInput(event) {
    
    if (event.currentTarget.value.trim() !== '') {

        elements.namLabel.textContent = event.currentTarget.value.trim();
           
    }
  
}