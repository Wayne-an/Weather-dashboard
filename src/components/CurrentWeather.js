export function CurrentWeather(weatherData = {}) {
  return `
    <section class="max-w-md mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center border border-white/40">

      <div class="text-7xl mb-4">
        ☀️
      </div>

      <h2 class="text-6xl font-bold text-slate-800">
        ${weatherData.temperature ?? "--"}°
      </h2>

      <p class="text-2xl text-slate-600 mt-2">
        ${weatherData.city ?? "Unknown Location"}
      </p>

      <p class="text-lg text-sky-500 font-medium mt-3">
        ${weatherData.condition ?? "Unavailable"}
      </p>

      <p class="text-slate-500 text-sm mt-1">
       Live weather powered by Open-Meteo
      </p>

    </section>
  `;
}