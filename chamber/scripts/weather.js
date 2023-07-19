const apiKey = "8ed76f08b24c1f60ca2602b9c52a68b3";
const apiUrl = "https://api.openweathermap.org/data/2.5";

// Function to fetch weather data for the chamber location
async function fetchWeatherData() {
	try {
		// Fetch current weather data
		const currentWeatherUrl = `${apiUrl}/weather?lat=6.19&lon=7.06&appid=${apiKey}`;
		const currentWeatherResponse = await fetch(currentWeatherUrl);
		const currentWeatherData = await currentWeatherResponse.json();

		// Fetch three-day forecast data
		const forecastUrl = `${apiUrl}/forecast?lat=6.19&lon=7.06&appid=${apiKey}`;
		const forecastResponse = await fetch(forecastUrl);
		const forecastData = await forecastResponse.json();

		// Display weather data on the page
		displayCurrentWeather(currentWeatherData);
		displayForecast(forecastData);
	} catch (error) {
		console.log(error);
	}
}

// Function to display the current weather data
function displayCurrentWeather(data) {
	const currentTemperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
	const currentWeatherDescription = data.weather[0].description;
	const currentHumidity = data.main.humidity;
	const weatherIcon = data.weather[0].icon;

	// Get HTML elements for weather data
	const weatherContainer = document.getElementById("current-weather");
	const temperatureElement = document.createElement("p");
	const descriptionElement = document.createElement("p");
	const humidityElement = document.createElement("p");
	humidityElement.classList.add("weather-humidity");
	const weatherImageDiv = document.createElement("div");

	// Set weather data and styling
	temperatureElement.textContent = `${currentTemperature}°C`;
	descriptionElement.textContent = currentWeatherDescription;
	humidityElement.textContent = `Humidity: ${currentHumidity}%`;
	// weatherImageDiv.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon">`;

	// Create flex container for weather data
	const flexContainer = document.createElement("div");
	flexContainer.classList.add("weather-container");

	// Append elements to flex container
	flexContainer.appendChild(weatherImageDiv);
	flexContainer.appendChild(temperatureElement);
	flexContainer.appendChild(descriptionElement);

	// Append flex container and humidity element to weather container
	weatherContainer.appendChild(flexContainer);
	weatherContainer.appendChild(humidityElement);
}

// Function to display the forecast data
function displayForecast(data) {
	const forecastContainer = document.getElementById("forecast");

	// Get the forecast data for the next three days
	const forecastData = data.list
		.filter((item) => item.dt_txt.includes("12:00:00"))
		.slice(0, 3);

	// Create HTML elements for each forecast item and append them to the container
	forecastData.forEach((item) => {
		const date = new Date(item.dt_txt);
		const day = date.toLocaleDateString("en-US", { weekday: "short" });
		const temperature = Math.round(item.main.temp - 273.15);
		const description = item.weather[0].description;

		const forecastItem = document.createElement("div");
		forecastItem.classList.add("forecast-item");
		forecastItem.innerHTML = `
                    <div class="forecast-day">${day}: </div>
                    <div class="forecast-temperature">${temperature}°C</div>
                    <div class="forecast-description">${description}</div>
                    `;

		forecastContainer.appendChild(forecastItem);
	});
}

fetchWeatherData();
