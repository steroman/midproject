const submit = document.getElementById("submit-button");

submit.addEventListener("click", validateForm);

function validateForm(e) {
  e.preventDefault();
  validateName();
  validateEmail();
  validatePhone();
  validateMessage();
}

function validateName() {
  const nameInput = document.getElementById("full-name").value;
  const namePattern = /ironhack/i;
  const parentDiv = document.getElementById("full-name").parentElement;

  clearErrorMessage(parentDiv);

  if (nameInput === "") {
    displayErrorMessage(parentDiv, 'Add your name');
    return false;
  } else if (namePattern.test(nameInput)) {
    displayErrorMessage(parentDiv, 'I am Ironhack!');
    return false;
  } else {
    return true;
  }
}

function validateEmail() {
  const emailInput = document.getElementById("email").value.trim();
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const parentDiv = document.getElementById("email").parentElement;

  clearErrorMessage(parentDiv);

  if (emailInput === "") {
    displayErrorMessage(parentDiv, 'Add your email');
    return false;
  } else if (!emailPattern.test(emailInput)) {
    displayErrorMessage(parentDiv, 'Add a valid email');
    return false;
  } else {
    return true;
  }
}

function validatePhone() {
  const phoneInput = document.getElementById("phone").value;
  const phonePattern = /^\d+$/;
  const parentDiv = document.getElementById("phone").parentElement;
  clearErrorMessage(parentDiv);
  if (phoneInput === "") {
    displayErrorMessage(parentDiv, 'Add your phone number');
    return false;
  } else if (!phonePattern.test(phoneInput)) {
    displayErrorMessage(parentDiv, 'Add only digits');
    return false;
  } else {
    return true;
    }
}

function validateMessage() {
  const messageInput = document.getElementById("message").value;
  const parentDiv = document.getElementById("message").parentElement;
  clearErrorMessage(parentDiv);
  if (messageInput === "") {
    displayErrorMessage(parentDiv, 'Add a message');
    return false;
  } else {
    return true;
    }
}

function displayErrorMessage(parentDiv, message) {
  const paragraph = document.createElement('p');
  paragraph.classList.add('error-message');
  paragraph.appendChild(document.createTextNode(message));
  parentDiv.appendChild(paragraph);
}

function clearErrorMessage(parentDiv) {
  const existingErrorMessage = parentDiv.querySelector('.error-message');
  if (existingErrorMessage !== null) {
    parentDiv.removeChild(existingErrorMessage);
  }
}
