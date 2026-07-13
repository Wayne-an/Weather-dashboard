import "./style.css";

import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { CurrentWeather } from "./components/CurrentWeather";
import { WeatherMetrics } from "./components/WeatherMetrics";

const weather = {
  city: "Nairobi, Kenya",
  temperature: 27,
  condition: "Sunny",
};

document.querySelector("#app").innerHTML = `
  ${Navbar()}

  <main class="min-h-screen bg-gradient-to-br from-sky-400 via-sky-200 to-blue-100 p-6">

    ${SearchBar()}

    ${CurrentWeather(weather)}

    ${WeatherMetrics()}

  </main>
`;