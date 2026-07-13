export function WeatherMetrics(weatherData = {}) {
  return `
    <section class="grid grid-cols-2 gap-4 max-w-md mx-auto mt-6">

      <div class="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-4 text-center border border-white/40">
        <p class="text-3xl">💧</p>
        <p class="font-semibold">Humidity</p>
        <p>${weatherData.humidity ?? "--"}%</p>
      </div>

      <div class="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-4 text-center border border-white/40">
        <p class="text-3xl">🌬️</p>
        <p class="font-semibold">Wind</p>
        <p>${weatherData.wind ?? "--"} km/h</p>
      </div>

      <div class="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-4 text-center border border-white/40">
        <p class="text-3xl">📈</p>
        <p class="font-semibold">Pressure</p>
        <p>${weatherData.pressure ?? "--"} hPa</p>
      </div>

      <div class="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-4 text-center border border-white/40">
        <p class="text-3xl">👀</p>
        <p class="font-semibold">Visibility</p>
        <p>${weatherData.visibility ?? "--"} km</p>
      </div>

    </section>
  `;
}