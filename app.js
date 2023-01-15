const navMenu = document.querySelector("ul");
const navLink = document.querySelectorAll("#nav-link");


const scrollUp = document.querySelector("#scroll-up");


// Theme switcher 
const checkbox = document.querySelector("#checkbox");

function openMenu() {
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

checkbox.addEventListener("change", () => {
  
  document.body.classList.toggle("dark");
});
