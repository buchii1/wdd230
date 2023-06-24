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
