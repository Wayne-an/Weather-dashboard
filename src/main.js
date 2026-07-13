import "./style.css";

import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { CurrentWeather } from "./components/CurrentWeather";
import { WeatherMetrics } from "./components/WeatherMetrics";

const weatherData = {
  city: "Nairobi, Kenya",
  temperature: 27,
  condition: "Sunny",
};

document.querySelector("#app").innerHTML = `
  ${Navbar()}

  <main class="min-h-screen bg-gradient-to-br from-sky-400 via-sky-200 to-blue-100 p-6">

    ${SearchBar()}

    ${CurrentWeather(weatherData)}

    ${WeatherMetrics()}

  </main>
`;
import {
  getCoordinates,
  getCurrentWeather,
} from "./services/weatherApi.js";

async function testApi() {
  try {
    const location = await getCoordinates("Nairobi");

    console.log("Location:", location);

    const weather = await getCurrentWeather(
      location.latitude,
      location.longitude
    );

    console.log("Weather:", weather);
  } catch (error) {
    console.error(error.message);
  }
}

testApi();

// ======================
// API Test
// ======================