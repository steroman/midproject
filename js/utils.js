const getInTouchbutton = document.querySelectorAll(".contact-button");

getInTouchbutton.forEach((button) => {
  button.addEventListener("click", function () {
    window.location.href = `${window.location.origin}/pages/contact.html`;
  });
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))