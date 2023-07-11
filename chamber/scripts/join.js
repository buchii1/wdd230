function timeStamp() {
	document.addEventListener("DOMContentLoaded", function () {
		const timestampInput = document.getElementById("timestamp");
		const currentDate = new Date();
		timestampInput.value = currentDate.toISOString();
	});
}
timeStamp();
