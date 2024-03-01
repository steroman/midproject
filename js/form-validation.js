/* MONITOR THE SUBMIT BUTTON AND EXECUTE A VALIDATE FUNCTION THAT INCLUDE ALL OTHER FUNCTIONS) */

const submit = document.getElementById("submit-button");

submit.addEventListener("click", validateForm);

function validateForm(e) {
  e.preventDefault();
  validateName();
  validateEmail();
  validatePhone();
  validateMessage();
}

/* FUNCTION TO VALIDATE WHETHER THE NAME IS EMPTY AND MATCHES *IRONHACK* */

function validateName() {
  const nameInput = document.getElementById("full-name").value;
  const namePattern = /ironhack/i;
  const parentDiv = document.getElementById("full-name").parentElement;

  clearErrorMessage(parentDiv);

  if (nameInput === "") {
    displayErrorMessage(parentDiv, "Add your name");
    return false;
  } else if (namePattern.test(nameInput)) {
    displayErrorMessage(parentDiv, `You can't be Ironhack, I am Ironhack!`);
    return false;
  } else {
    return true;
  }
}

/* FUNCTION TO VALIDATE WHETHER THE EMAIL IS EMPTY AND MATCHES A VALID EMAIL */

function validateEmail() {
  const emailInput = document.getElementById("email").value.trim();
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const parentDiv = document.getElementById("email").parentElement;

  clearErrorMessage(parentDiv);

  if (emailInput === "") {
    displayErrorMessage(parentDiv, "Add your email");
    return false;
  } else if (!emailPattern.test(emailInput)) {
    displayErrorMessage(parentDiv, "Add a valid email");
    return false;
  } else {
    return true;
  }
}

/* FUNCTION TO VALIDATE WHETHER THE PHONE IS EMPTY AND USES ONLY DIGITS */

function validatePhone() {
  const phoneInput = document.getElementById("phone").value;
  const phonePattern = /^\d+$/;
  const parentDiv = document.getElementById("phone").parentElement;
  clearErrorMessage(parentDiv);
  if (phoneInput === "") {
    displayErrorMessage(parentDiv, "Add your phone number");
    return false;
  } else if (!phonePattern.test(phoneInput)) {
    displayErrorMessage(parentDiv, "Add only digits");
    return false;
  } else {
    return true;
  }
}

/* FUNCTION TO VALIDATE WHETHER THE MESSAGE IS EMPTY */

function validateMessage() {
  const messageInput = document.getElementById("message").value;
  const parentDiv = document.getElementById("message").parentElement;
  clearErrorMessage(parentDiv);
  if (messageInput === "") {
    displayErrorMessage(parentDiv, "Add a message");
    return false;
  } else {
    return true;
  }
}

/* FUNCTION TO ADD AN EMPTY PARAGRAPH BELOW EACH FIELD TO FILL WITH THE ERROR MESSAGE */

function displayErrorMessage(parentDiv, message) {
  const paragraph = document.createElement("p");
  paragraph.classList.add("error-message");
  paragraph.appendChild(document.createTextNode(message));
  parentDiv.appendChild(paragraph);
}

/* FUNCTION TO REMOVE THE ERROR DIV WHEN A FIELD IS CORRECTLY FILLED */

function clearErrorMessage(parentDiv) {
  const existingErrorMessage = parentDiv.querySelector(".error-message");
  if (existingErrorMessage !== null) {
    parentDiv.removeChild(existingErrorMessage);
  }
}
