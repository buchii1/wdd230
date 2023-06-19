// function menuButton() {
// 	// Get HTML Reference
// 	const menuBtn = document.querySelector("#menu");
// 	const navUl = document.querySelector("#nav");

// 	menuBtn.addEventListener("click", () => {
// 		navUl.classList.toggle("open");
// 		menuBtn.classList.toggle("open");

// 		if (menuBtn.textContent === "☰") {
// 			menuBtn.textContent = "✖";
// 		} else {
// 			menuBtn.textContent = "☰";
// 		}
// 	});
// }
// menuButton();

// function headerText() {
// 	// Define the maximum width in em units
// 	const maxWidthEm = 32.5;

// 	// Convert the maximum width from em to pixels
// 	const maxWidthPixels = maxWidthEm * 16;

// 	// Get HTML Reference
// 	const hero = document.querySelector("#hero-msg");

// 	let text;

// 	// Check if the viewport width is less than or equal to the maximum width in pixels
// 	if (window.innerWidth <= maxWidthPixels) {
// 		// Execute code for viewport widths up to the maximum width
// 		text = document.createElement("h1");
// 		text.innerHTML = "Awka Chamber of Commerce";
// 	} else {
// 		text = document.createElement("h2");
// 		text.innerHTML = "Seeking a vibrant community for business growth?";
// 	}

// 	hero.prepend(text);
// }
// headerText();
