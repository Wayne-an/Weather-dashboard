import { ForecastCard } from "./ForecastCard.js";

export function ForecastSection(forecast = []) {
  return `
    <section class="max-w-5xl mx-auto mt-10">

      <h2 class="text-2xl font-bold text-slate-800 mb-6">
        5-Day Forecast
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">

        ${forecast.map(day => ForecastCard(day)).join("")}

      </div>

    </section>
  `;
}