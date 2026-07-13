export function CurrentWeather(weatherData = {}) {
  if (weatherData.loading) {
    return `
      <section class="max-w-md mx-auto bg-white/70 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center border border-white/40 dark:border-slate-700">

        <div class="text-6xl animate-spin">🌍</div>

        <p class="text-xl font-semibold mt-6 text-slate-800 dark:text-white">
          Loading weather...
        </p>

      </section>
    `;
  }

  if (weatherData.error) {
    return `
      <section class="max-w-md mx-auto bg-red-50 dark:bg-red-900/40 border border-red-200 dark:border-red-700 rounded-3xl shadow-lg p-8 text-center">

        <div class="text-6xl">❌</div>

        <h2 class="text-2xl font-bold text-red-600 dark:text-red-300 mt-4">
          City Not Found
        </h2>

        <p class="text-slate-600 dark:text-slate-300 mt-2">
          ${weatherData.error}
        </p>

      </section>
    `;
  }

  return `
    <section class="max-w-md mx-auto bg-white/70 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center border border-white/40 dark:border-slate-700">

      <div class="text-7xl mb-4">
        ${weatherData.icon ?? "🌍"}
      </div>

      <h2 class="text-6xl font-bold text-slate-800 dark:text-white">
        ${weatherData.temperature ?? "--"}°
      </h2>

      <p class="text-2xl text-slate-600 dark:text-slate-300 mt-2">
        ${weatherData.city ?? "Unknown Location"}
      </p>

      <p class="text-lg text-sky-500 dark:text-sky-300 font-medium mt-3">
        ${weatherData.condition ?? "Unavailable"}
      </p>

      <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">
        Live weather powered by Open-Meteo
      </p>

    </section>
  `;
}