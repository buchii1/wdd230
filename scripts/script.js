function modificationDetails() {
	// Get Current Year
	const year = new Date().getFullYear();
	document.querySelector("#year").textContent = year;

	// Get last modified date
	let lastModified = document.lastModified;
	document.querySelector(
		"#lastModified"
	).innerHTML = `Last Modification: ${lastModified}`;
}
modificationDetails();

function mobileMenu() {
	// Navigation
	const menuBtn = document.querySelector("#menu");
	const navUl = document.querySelector(".nav-ul");

	menuBtn.addEventListener("click", () => {
		navUl.classList.toggle("open");
		menuBtn.classList.toggle("open");

		if (menuBtn.textContent === "☰") {
			menuBtn.textContent = "✖";
		} else {
			menuBtn.textContent = "☰";
		}
	});
}
mobileMenu();

function toggleDarkMode() {
	const darkTheme = document.querySelector(".dark-theme");
	const body = document.querySelector("body");
	const header2 = document.querySelector("main h2");

	function toggleDarkTheme() {
		body.classList.toggle("light-theme");
		header2.classList.toggle("light-color");
	}
	darkTheme.addEventListener("click", toggleDarkTheme);
}
toggleDarkMode();

function visitorCount() {
	const displayTotVisit = document.querySelector(".tot-visit");
	let totVisit = Number(localStorage.getItem("totalVisits")) || 0;

	if (totVisit > 0) {
		displayTotVisit.textContent = totVisit;
	} else {
		displayTotVisit.textContent = "First timer. Welcome! 🎉";
	}

	totVisit++;
	localStorage.setItem("totalVisits", totVisit);
}
visitorCount();
