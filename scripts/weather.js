const currentTemp = document.querySelector("#current-temp");
const weather = document.querySelector("#weather");
const figure = document.createElement("figure");
const weatherIcon = document.createElement("img");
const figCaption = document.createElement("figcaption");

const lat = 6.19;
const lon = 7.06;
const apiKey = "8ed76f08b24c1f60ca2602b9c52a68b3";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
	try {
		const response = await fetch(url);

		if (response.ok) {
			const data = await response.json();
			displayResults(data);
		} else {
			throw Error(await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}
apiFetch();

const displayResults = (data) => {
	currentTemp.innerHTML = `${data.main.temp}&deg;F`;

	const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
	let desc = data.weather[0].description;

	weatherIcon.setAttribute("src", `${iconsrc}`);
	weatherIcon.setAttribute("alt", `${desc}`);
	figCaption.textContent = `${desc}`;

	figure.appendChild(weatherIcon);
	figure.appendChild(figCaption);
	weather.appendChild(figure);
};
