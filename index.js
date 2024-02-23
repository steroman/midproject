const getInTouchbutton = document.querySelectorAll('.contact-button')

getInTouchbutton.forEach(button => {
  button.addEventListener('click', function() {
    window.location.href = "pages/contact.html";
  });
});
