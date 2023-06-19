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
