// Navigation
const menuBtn = document.querySelector("#menu");
const navUl = document.querySelector("#nav");

menuBtn.addEventListener("click", () => {
	console.log("clicked");
	navUl.classList.toggle("open");
	menuBtn.classList.toggle("open");

	if (menuBtn.textContent === "☰") {
		menuBtn.textContent = "✖";
	} else {
		menuBtn.textContent = "☰";
	}
});