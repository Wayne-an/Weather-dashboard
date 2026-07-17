import "./style.css";

import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { CurrentWeather } from "./components/CurrentWeather";
import { WeatherMetrics } from "./components/WeatherMetrics";
import {
  getCoordinates,
  getCurrentWeather,
  getForecast,
} from "./services/weatherApi.js";
import { getWeatherCondition } from "./utils/weatherCodes.js";
import { getWeatherIcon } from "./utils/weatherIcons.js";
import { ForecastSection } from "./components/ForecastSection";
import { getBackground } from "./utils/backgrounds.js";
import {
  toggleTheme,
  loadTheme,
} from "./utils/theme.js";


const weatherData = {
  city: "Nairobi, Kenya",
  temperature: 27,
  condition: "Sunny",
};


function renderWeather(weatherData, forecast = []) {
  document.querySelector("#app").innerHTML = `
    ${Navbar()}

    <main
  class="min-h-screen
         bg-gradient-to-br ${getBackground(weatherData.condition)}
         dark:from-slate-950
         dark:via-slate-900
         dark:to-slate-800
         p-6 space-y-8
         transition-all duration-700"
>

      ${SearchBar()}

      ${CurrentWeather(weatherData)}

      ${WeatherMetrics(weatherData)}

      ${ForecastSection(forecast)}

    </main>
  `;
  attachSearchListener();
  attachLocationListener();
  attachThemeListener();
}

loadTheme();
renderWeather(weatherData, []);

// ======================
// API Test
// ======================

function attachSearchListener() {
  const form = document.querySelector("#search-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = document.querySelector("#city-input").value.trim();

    if (!city) return;
    renderWeather({ 
      loading: true,
    });

    try {
      const location = await getCoordinates(city);

      const current = await getCurrentWeather(
        location.latitude,
        location.longitude
      );
      const daily = await getForecast(
        location.latitude,
        location.longitude
      );
      console.log("Forecast data:", daily);
      const forecast = daily.time.map((date, index) => ({
  day: new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
  }),
  icon: getWeatherIcon(daily.weather_code[index]),
  max: Math.round(daily.temperature_2m_max[index]),
  min: Math.round(daily.temperature_2m_min[index]),
}));

      const weatherData = {
        city: `${location.name}, ${location.country}`,
        temperature: Math.round(current.temperature_2m),
        condition: getWeatherCondition(current.weather_code),
        icon: getWeatherIcon(current.weather_code),

        humidity: current.relative_humidity_2m,
        wind: Math.round(current.wind_speed_10m),

        pressure: "--",
        visibility: "--",
     };

     
      renderWeather(weatherData, forecast);

    } catch (error) {
      renderWeather({ 
        error: error.message, 
      });
    }
  });
}
function attachLocationListener() {
  const button = document.querySelector("#location-btn");

  if (!button) return;

  button.addEventListener("click", () => {
    console.log("📍 Location button clicked");
    console.log("Geolocation API:", navigator.geolocation);

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
      },
      (error) => {
        console.error(error);
        alert(error.message);
      }
    );
  });
}
function attachThemeListener() {
  const button = document.querySelector("#theme-toggle");

  if (!button) return;

  button.addEventListener("click", () => {
    toggleTheme();
  });
}