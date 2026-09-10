const menu = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
if (menu) menu.addEventListener("click", () => mobileNav.classList.toggle("open"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileNav) mobileNav.classList.remove("open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
