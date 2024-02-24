const getInTouchbutton = document.querySelectorAll(".contact-button");

getInTouchbutton.forEach((button) => {
  button.addEventListener("click", function () {
    window.location.href = "${window.location.origin}/pages/contact.html";
  });
});