export function CurrentWeather(weather = {}) {
  return `
    <section class="max-w-md mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center border border-white/40">

      <div class="text-7xl mb-4">
        ☀️
      </div>

      <h2 class="text-6xl font-bold text-slate-800">
        ${weather.temperature ?? "--"}°
      </h2>

      <p class="text-2xl text-slate-600 mt-2">
        ${weather.city ?? "Unknown Location"}
      </p>

      <p class="text-lg text-sky-500 font-medium mt-3">
        ${weather.condition ?? "Unavailable"}
      </p>

    </section>
  `;
}