// Smooth scroll for same-page nav links (like #about, #contact on index.html)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple cart counter for the catalog page
let cartCount = 0;
const addToCartButtons = document.querySelectorAll('.product-card .btn-main');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    button.textContent = "Added ✓";
    setTimeout(() => {
      button.textContent = "Add to Cart";
    }, 1000);
    console.log(`Cart items: ${cartCount}`);
  });
});

// Search bar basic behavior (prevents page reload on click)
const searchBtn = document.querySelector('.search .btn');
if (searchBtn) {
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const query = document.querySelector('.srch').value;
    if (query.trim() !== "") {
      alert(`Searching for: ${query}`);
    }
  });
}

// Contact form validation

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "") {

            formMessage.textContent = "Please fill in all fields.";
            formMessage.style.color = "red";

        } else {

            formMessage.textContent =
                "Thank you! Your enquiry has been submitted successfully.";

            formMessage.style.color = "green";

            contactForm.reset();
        }
    });
}

// Mobile Navigation Menu

const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", function() {

        menu.classList.toggle("active");

    });

}

// Welcome Message

window.addEventListener("load", function() {

    console.log("Welcome to AutoCore Spares!");

});
