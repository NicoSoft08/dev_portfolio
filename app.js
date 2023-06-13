// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Declaring and initializing variables

const burger = document.querySelector("#burger_menu");
const closer = document.querySelector("#closer_menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav_link");

// Opening 
burger.addEventListener("click", () => {
    burger.style.display = 'none';
    closer.style.display = 'block';
    ul.classList.add("show");
});

// Closing
closer.addEventListener("click", () => {
    burger.style.display = 'block';
    closer.style.display = 'none';
    ul.classList.remove("show");
});

// Close hamburger menu when a link is clicked

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    closer.style.display = 'none';
    burger.style.display = 'block';
    ul.classList.remove("show");
  })
);
