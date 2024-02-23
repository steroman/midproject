function validateIronhack() {
const string = document.getElementById('full-name').value;
if (string === "ironhack" || string === "Ironhack") {
  alert("I am Ironhack!")
} else if (string === "") {
  alert("Can't be empty")
} else {
  alert("Glad to hear you're not me")
}
}

function validateEmail() {
const string = document.getElementById('email').value;
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

if (emailPattern.test(string)) {
alert("This is an email")
} else {
  alert("This is not an email")
}
}

const submit = document.getElementById("submit-button");

submit.addEventListener("click", validateAll);

function validateAll(e) {
  e.preventDefault();
  validateIronhack();
  validateEmail();
}