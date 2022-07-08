const form = document.querySelector('.login-form');



const onSubmitForm = (event) => {
     event.preventDefault();
  const {elements: { email, password }} = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return console.log(alert('Please fill all fields!'));
  }
    
    const dataForm = {
        email: email.value,
        password: password.value,
    }

  console.log(dataForm);
  event.currentTarget.reset();
}

form.addEventListener('submit', onSubmitForm);