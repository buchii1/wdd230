function emailValidation() {
	const emailInput = document.querySelector('input[name="email"]');
	const message = document.querySelector("#emailMessage");

	emailInput.addEventListener("focusout", function () {
		const email = this.value.trim().toLowerCase();
		if (email.endsWith("@byui.edu")) {
			message.style.display = "none";
		} else {
			message.style.display = "block";
			message.textContent = "Invalid email address!";
			emailInput.value = "";
			emailInput.focus();
		}
	});
}
emailValidation();

function passwordValidation() {
	const pass1 = document.querySelector("#password");
	const pass2 = document.querySelector("#password1");
	const message = document.querySelector("#passMessage");

	pass2.addEventListener("focusout", checkSum);

	function checkSum() {
		if (pass1.value !== pass2.value) {
			message.style.display = "block";
			message.textContent = "Password doesn't match!";
			pass2.value = "";
			pass1.value = "";
			pass1.focus();
		} else {
			message.style.display = "none";
		}
	}
}
passwordValidation();

function rangeSlider() {
	const rangevalue = document.getElementById("rangevalue");
	const range = document.getElementById("range");

	// RANGE event listener
	range.addEventListener("change", displayRatingValue);
	range.addEventListener("input", displayRatingValue);

	function displayRatingValue() {
		rangevalue.innerHTML = range.value;
	}
}
rangeSlider();
