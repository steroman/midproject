/* FUNCTION TO REDIRECT TO CONTACT PAGE WHEN USERS CLICK ON CONTACT BUTTON */

const getInTouchbutton = document.querySelectorAll(".contact-button");

getInTouchbutton.forEach((button) => {
  button.addEventListener("click", function () {
    window.location.href = `${window.location.origin}/pages/contact.html`;
  });
});

/* FUNCTION TO TOGGLE THE MOBILE MENU */

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

/* FUNCTION TO MAKE THE SECTION HEADINGS VISIBLE */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      let target = document.querySelector(this.getAttribute('href'));
      if (target) {
          window.scrollTo({
              top: target.offsetTop - 150, // Adjust the offset according to the height of your fixed navigation bar
              behavior: 'smooth'
          });
      }
  });
});