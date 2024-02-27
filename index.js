// const getInTouchbutton = document.querySelectorAll(".contact-button");

// getInTouchbutton.forEach((button) => {
//   button.addEventListener("click", function () {
//     window.location.href = "pages/contact.html";
//   });
// });

// Select the navigation bar items
const navItems = document.querySelectorAll('.nav-item');

// Create a callback function to be executed when the elements become visible
const intersectionObserverCallback = (entries, observer) => {
  entries.forEach(entry => {
    // Check if the element is intersecting
    if (entry.isIntersecting) {
      // Add a CSS class to the element to modify its style
      entry.target.classList.add('visible');
    } else {
      // Remove the CSS class if the element is not intersecting
      entry.target.classList.remove('visible');
    }
  });
};

// Create an Intersection Observer instance
const observer = new IntersectionObserver(intersectionObserverCallback, {
  root: null, // Use the viewport as the root
  threshold: 0.5 // 50% of the element must be visible for the callback to be triggered
});

// Observe each navigation bar item
navItems.forEach(item => {
  observer.observe(item);
});