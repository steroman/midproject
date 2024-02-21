function validateIronhack() {}
const name = document.getElementById("full-name");

name.addEventListener("ironhack", (event) => {
  if (name.validity.pattern) {
    name.setCustomValidity("I am expecting an email address!");
  } else {
    name.setCustomValidity("");
  }
});


// VALIDATES IF A FIELD IS FILLED

// function validateFields() {
//   const name = document.getElementById('full-name').value;
//   const parentDiv = document.querySelector('#full-name-container');

//   if (name === "") {
//     if (parentDiv.querySelector('.error-message') === null) { // Check if an error message is already displayed
//       const paragraph = document.createElement('p');
//       paragraph.classList.add('error-message'); // Add a CSS class to style the error message
//       const errorMessage = document.createTextNode('This field is required');
//       paragraph.appendChild(errorMessage);
//       parentDiv.appendChild(paragraph);
//     }
//     return false; // Prevent form submission if the name field is empty
//   } else {
//     // Remove any existing error message
//     const existingErrorMessage = parentDiv.querySelector('.error-message');
//     if (existingErrorMessage !== null) {
//       parentDiv.removeChild(existingErrorMessage);
//     }
//     return true; // Allow form submission if the name field is not empty
//   }
// }

// VALIDATES ALL FIELDS BUT ALLOWS SUBMITTING IF ONE FIELD IS FILLED


const submit = document.getElementById("submit-button");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  const inputs = document.querySelectorAll('input, textarea');

  let formIsValid = true; // Assume the form is valid by default

  inputs.forEach(input => {
    const parentDiv = input.closest('.field');
    const value = input.value.trim();

    if (value === "") {
      if (parentDiv && parentDiv.querySelector('.error-message') === null) {
        const paragraph = document.createElement('p');
        paragraph.classList.add('error-message');
        const errorMessage = document.createTextNode('This field is required');
        paragraph.appendChild(errorMessage);
        parentDiv.appendChild(paragraph);
        formIsValid = false; // Set formIsValid to false if any field is empty
      }
    } else {
      const existingErrorMessage = parentDiv.querySelector('.error-message');
      if (existingErrorMessage !== null) {
        parentDiv.removeChild(existingErrorMessage);
      }
    }
  });

  return formIsValid; // Return the form validation result
}

// WRITTEN BY ME BASED ON https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/

// const submit = document.getElementById("submit-button");

// submit.addEventListener("click", validate);

// function validate(e) {
//   e.preventDefault();
//   const parentDiv = document.querySelector('#full-name-container');
//   const fullName = document.getElementById("full-name");
//   let valid = true;

//   if (!fullName.value) {
//         const paragraph = document.createElement('p');
//         paragraph.classList.add('error-message');
//         const errorMessage = document.createTextNode('This field is required');
//         paragraph.appendChild(errorMessage);
//         parentDiv.appendChild(paragraph);
//   } else if (fullName.value !== null || "") {
//     const existingErrorMessage = parentDiv.querySelector('.error-message');
//         parentDiv.removeChild(existingErrorMessage);
//   }
//   return valid;
// }