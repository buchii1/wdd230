function visitLog() {
	const currentDate = new Date();
	const storedDate = localStorage.getItem("visitDate");
	const displayVisitLog = document.querySelector(".visits");

	if (!storedDate) {
		// User's first visit
		displayVisitLog.textContent =
			"Welcome!🎉 Let us know if you have any questions.";
		// Store current visit date in localStorage
		localStorage.setItem("visitDate", currentDate);
	} else {
		const lastVisitDate = new Date(storedDate);
		// Calc time difference in milliseconds
		const timeDifference = currentDate.getTime() - lastVisitDate.getTime();
		// Calc time difference in days
		const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

		// Check time difference and display the appropriate message
		if (daysDifference === 0) {
			displayVisitLog.textContent = "Back so soon! Awesome!";
		} else {
			displayVisitLog.innerHTML = `You last visited ${daysDifference} ${
				daysDifference === 1 ? "day" : "days"
			} ago.`;
		}
	}
	// Update date in localStorage
	localStorage.setItem("visitDate", currentDate);
}
visitLog();
