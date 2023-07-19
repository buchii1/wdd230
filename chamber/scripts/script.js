function menuButton() {
	// Get HTML Reference
	const menuBtn = document.querySelector("#menu");
	const navUl = document.querySelector("#nav");

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
menuButton();

function wayFinding()  {
	// Get the current page URL
	const currentPageUrl = window.location.href;

	// Get all navigation links
	const navLinks = document.querySelectorAll(".nav-ul li a");

	// Iterate over each link and check if its href matches the current page URL
	for (const link of navLinks) {
		if (link.href === currentPageUrl) {
			link.classList.add("active");
		} else {
			link.classList.remove("active");
		}
	}
}
wayFinding()

function footerDetails() {
	// Get Current Year
	const year = new Date().getFullYear();
	document.querySelector("#year").textContent = year;

	// Get last modified date
	let lastModified = document.lastModified;
	document.querySelector(
		"#lastModified"
	).innerHTML = `Last Modification: ${lastModified}`;
}
footerDetails();
