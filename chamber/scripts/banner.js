const bannerContainer = document.querySelector(".banner");

// Function to check if the current day is Monday, Tuesday, or Wednesday
function isMeetAndGreetDay() {
	const currentDay = new Date().getDay();
	return currentDay >= 1 && currentDay <= 3; // Monday = 1, Tuesday = 2, Wednesday = 3
}

// Function to display the meet and greet banner
function displayMeetAndGreetBanner() {
	if (isMeetAndGreetDay()) {
		const bannerHTML = `
      <div class="banner-content">
        <h4>Chamber of Commerce Meet and Greet</h4>
        <p>Join us on Wednesday at 7:00 p.m.</p>
        <p>Venue: Chamber Auditorium</p>
        <p>Special Guest: John Smith</p>
        <p>Don't miss this opportunity to network and connect with fellow members!</p>
        <button class="close-banner">Close</button>
      </div>
    `;

		bannerContainer.innerHTML = bannerHTML;

		const closeButton = document.querySelector(".close-banner");
		closeButton.addEventListener("click", closeBanner);
	} else {
		bannerContainer.textContent = "Nothing to display.";
	}
}

// Function to close the banner
function closeBanner() {
	bannerContainer.innerHTML = "";
}

displayMeetAndGreetBanner();
