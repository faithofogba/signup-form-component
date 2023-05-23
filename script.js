function handleSubmit(event) {
    event.preventDefault();

    validateInput('fname', "First Name cannot be empty")
    validateInput('lname', "Last Name cannot be empty")
    validateInput('email', "Looks like this is not an email")
    validateInput('pass', "Password cannot be empty")
}

function validateInput(inputId, message) {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value.trim();

    console.log("submitted", inputValue)

    if(inputValue === "") {
        setErrorFor(inputField, message)
    } else {
        setSuccessFor(inputField)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    // add error message inside small 
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control';
}