// const email = document.getElementById("email");

// email.addEventListener("input", (event) => {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an email address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

// function validateFields() {
//   validateRequired();
// //   validateEmail()
// }

function validateFields() {
  const name = document.getElementById('full-name').value;
  const parentDiv = document.querySelector('#full-name-container');

  if (name === "") {
    if (parentDiv.querySelector('.error-message') === null) { // Check if an error message is already displayed
      const paragraph = document.createElement('p');
      paragraph.classList.add('error-message'); // Add a CSS class to style the error message
      const errorMessage = document.createTextNode('This field is required');
      paragraph.appendChild(errorMessage);
      parentDiv.appendChild(paragraph);
    }
    return false; // Prevent form submission if the name field is empty
  } else {
    // Remove any existing error message
    const existingErrorMessage = parentDiv.querySelector('.error-message');
    if (existingErrorMessage !== null) {
      parentDiv.removeChild(existingErrorMessage);
    }
    return true; // Allow form submission if the name field is not empty
  }
}