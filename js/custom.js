// Declaring and initializing variables

const burger = document.querySelector("#burger_menu");
const closer = document.querySelector("#closer_menu");
const navbar = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".nav_link");

// Opening
burger.addEventListener('click', () => {
    if (getComputedStyle(navbar).display != 'flex') {
        burger.style.display = 'none';
        closer.style.display = 'block';
        navbar.style.display = 'flex';
    }
});

// Closing
closer.addEventListener('click', () => {
    if (getComputedStyle(navbar).display != 'none') {
        burger.style.display = 'block';
        closer.style.display = 'none';
        navbar.style.display = 'none';
    }
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) => link.addEventListener('click', () => {
    closer.style.display = 'none';
    burger.style.display = 'block';
    navbar.style.display = 'none';
}))

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
