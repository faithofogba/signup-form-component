const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('pass')
const errorElement = document.getElementById('error')

const form = document.getElementById('form')

console.log("I am here")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(fnameValue === "") {
        setErrorFor(fname, "First Name cannot be empty")
    } else {
        setSuccessFor(fname)
    }

    if(lnameValue === "") {
        setErrorFor(lname, "Last Name cannot be empty")
    } else {
        setSuccessFor(lname)
    }

    if(emailValue === "") {
        setErrorFor(email, "Looks like this is not an email")
    } else {
        setSuccessFor(email)
    }

    if(passwordValue === "") {
        setErrorFor(password, "Password cannot be empty")
    } else {
        setSuccessFor(password)
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