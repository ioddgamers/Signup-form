//Input Field values
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
//Error Messages
const firstNameErrorMessage = document.querySelector('.error-message-first');
const lastNameErrorMessage = document.querySelector('.error-message-last');
const emailErrorMessage = document.querySelector('.error-message-email');
const passwordErrorMessage = document.querySelector('.error-message-password');
//Error Icons
const firstNameErrorIcon = document.querySelector('.icon1');
const lastNameErrorIcon = document.querySelector('.icon2');
const emailErrorIcon = document.querySelector('.icon3');
const passwordErrorIcon = document.querySelector('.icon4');
//Form elements
const submitButton = document.getElementById('claim-trial');
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    firstNameValidation();
    lastNameValidation();
    emailValidation();
    passwordValidation();

    if (!isValidForm()) {
        return; 
    }
    form.submit();
});

function firstNameValidation() {
    if (!firstNameInput.value.trim()) {
        firstNameErrorIcon.classList.remove('hidden');
        firstNameErrorMessage.innerHTML = 'First Name cannot be empty';
    } else {
        firstNameErrorIcon.classList.add('hidden');
        firstNameErrorMessage.innerHTML = '';
    }
}
function lastNameValidation() {
    if (!lastNameInput.value.trim()) {
        lastNameErrorIcon.classList.remove('hidden');
        lastNameErrorMessage.innerHTML = 'Last Name cannot be empty';
    } else {
        lastNameErrorIcon.classList.add('hidden');
        lastNameErrorMessage.innerHTML = '';
    }
}

function emailValidation() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = emailInput.value;
    if (emailRegex.test(email)) {
        emailErrorMessage.innerHTML = "";
        //emailInput.style.borderColor = "hsl(223, 100%, 88%)";
        emailErrorIcon.classList.add('hidden');
    } else {
        emailErrorMessage.innerHTML = "Looks like this is not an email";
        //emailInput.style.borderColor = "red";
        emailErrorIcon.classList.remove('hidden');
    }
};

function passwordValidation() {
    if (!passwordInput.value.trim()) {
        passwordErrorIcon.classList.remove('hidden');
        passwordErrorMessage.innerHTML = 'Password cannot be empty';
    } else {
        passwordErrorIcon.classList.add('hidden');
        passwordErrorMessage.innerHTML = '';
    }
}
