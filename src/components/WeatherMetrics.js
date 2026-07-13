export function WeatherMetrics() {
  return `
    <section class="grid grid-cols-2 gap-4 max-w-md mx-auto mt-6">

      <div class="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-4 text-center border border-white/40">
        <p class="text-3xl">💧</p>
        <p class="font-semibold">Humidity</p>
        <p>68%</p>
      </div>

      <div class="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-4 text-center border border-white/40">
        <p class="text-3xl">🌬️</p>
        <p class="font-semibold">Wind</p>
        <p>14 km/h</p>
      </div>

      <div class="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-4 text-center border border-white/40">
        <p class="text-3xl">📈</p>
        <p class="font-semibold">Pressure</p>
        <p>1014 hPa</p>
      </div>

      <div class="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-4 text-center border border-white/40">
        <p class="text-3xl">👀</p>
        <p class="font-semibold">Visibility</p>
        <p>10 km</p>
      </div>

    </section>
  `;
}