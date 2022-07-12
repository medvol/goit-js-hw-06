const elements = {
    input: document.querySelector('#name-input'),
    namLabel: document.querySelector('#name-output'),
}

elements.input.addEventListener('input', onTextInput);

function onTextInput(event) {

      elements.namLabel.textContent = event.currentTarget.value.trim();
    
    if (!elements.namLabel.textContent) {

        elements.namLabel.textContent = 'Anonymous'
   
    }
  
}