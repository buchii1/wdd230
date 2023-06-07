// Get Current Year
const dateToday = new Date();
const year = dateToday.getFullYear();
document.querySelector("#year").textContent = year;

// Get last modified date
let lastModified = document.lastModified;
document.querySelector("#lastModified").innerHTML = `Last Modification: ${lastModified}`;
