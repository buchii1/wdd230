// Get Current Year
const year = new Date().getFullYear();
document.querySelector("#year").textContent = year;

// Get last modified date
let lastModified = document.lastModified;
document.querySelector(
	"#lastModified"
).innerHTML = `Last Modification: ${lastModified}`;

// Navigation
const menuBtn = document.querySelector("#menu");
const navUl = document.querySelector(".nav-ul");

menuBtn.addEventListener("click", () => {
	navUl.classList.toggle("open");
	menuBtn.classList.toggle("open");
});
