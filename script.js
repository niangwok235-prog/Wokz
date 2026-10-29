
/* JIMIN PHOTOGRAPHY — SCRIPT.JS */

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");

  menuToggle.setAttribute("aria-expanded", String(isOpen));

  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

// Close menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// Highlight the current navigation section
const sections = document.querySelectorAll("main section[id]");
const navigationItems = document.querySelectorAll(".nav-links a");

function updateActiveLink() {
  let currentSection = "home";

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop <= 120) {
      currentSection = section.id;
    }
  });

  navigationItems.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentSection}`
    );
  });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

// Update copyright year automatically
document.getElementById("year").textContent =
  new Date().getFullYear();

// Contact form: prepare an email
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(
    "Photography Enquiry - Jimin Photography"
  );

  const body = encodeURIComponent(
    `Hello Jimin Photography,\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n\n` +
    `Message:\n${message}`
  );

  const emailLink =
    `mailto:jimoxyamaski1@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = emailLink;
});


