export function WeatherMetrics(weatherData = {}) {
  return `
    <section class="grid grid-cols-2 gap-4 max-w-md mx-auto mt-6">

      <div class="bg-white/70 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-4 text-center border border-white/40 dark:border-slate-700">
        <p class="text-3xl">💧</p>
        <p class="font-semibold text-slate-800 dark:text-white">Humidity</p>
        <p class="text-slate-600 dark:text-slate-300">
          ${weatherData.humidity ?? "--"}%
        </p>
      </div>

      <div class="bg-white/70 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-4 text-center border border-white/40 dark:border-slate-700">
        <p class="text-3xl">🌬️</p>
        <p class="font-semibold text-slate-800 dark:text-white">Wind</p>
        <p class="text-slate-600 dark:text-slate-300">
          ${weatherData.wind ?? "--"} km/h
        </p>
      </div>

      <div class="bg-white/70 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-4 text-center border border-white/40 dark:border-slate-700">
        <p class="text-3xl">📈</p>
        <p class="font-semibold text-slate-800 dark:text-white">Pressure</p>
        <p class="text-slate-600 dark:text-slate-300">
          ${weatherData.pressure ?? "--"} hPa
        </p>
      </div>

      <div class="bg-white/70 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-4 text-center border border-white/40 dark:border-slate-700">
        <p class="text-3xl">👀</p>
        <p class="font-semibold text-slate-800 dark:text-white">Visibility</p>
        <p class="text-slate-600 dark:text-slate-300">
          ${weatherData.visibility ?? "--"} km
        </p>
      </div>

    </section>
  `;
}