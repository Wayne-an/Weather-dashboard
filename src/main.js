import "./style.css";

import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { CurrentWeather } from "./components/CurrentWeather";
import { WeatherMetrics } from "./components/WeatherMetrics";
import {
  getCoordinates,
  getCurrentWeather,
} from "./services/weatherApi.js";
import { getWeatherCondition } from "./utils/weatherCodes.js";

const weatherData = {
  city: "Nairobi, Kenya",
  temperature: 27,
  condition: "Sunny",
};

function renderWeather(weatherData) {
  document.querySelector("#app").innerHTML = `
    ${Navbar()}

    <main class="min-h-screen bg-gradient-to-br from-sky-400 via-sky-200 to-blue-100 p-6">

      ${SearchBar()}

      ${CurrentWeather(weatherData)}

      ${WeatherMetrics()}

    </main>
  `;
  attachSearchListener();
}

renderWeather(weatherData);

// ======================
// API Test
// ======================

function attachSearchListener() {
  const form = document.querySelector("#search-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = document.querySelector("#city-input").value.trim();

    if (!city) return;

    try {
      const location = await getCoordinates(city);

      const current = await getCurrentWeather(
        location.latitude,
        location.longitude
      );

      const weatherData = {
        city: `${location.name}, ${location.country}`,
        temperature: Math.round(current.temperature_2m),
        condition: getWeatherCondition(current.weather_code),
      };

      renderWeather(weatherData);

    } catch (error) {
      alert(error.message);
    }
  });
}