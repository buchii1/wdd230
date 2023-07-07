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

function timeStamp() {
	document.addEventListener("DOMContentLoaded", function () {
		const timestampInput = document.getElementById("timestamp");
		const currentDate = new Date();
		timestampInput.value = currentDate.toISOString();
	});
}
timeStamp();
