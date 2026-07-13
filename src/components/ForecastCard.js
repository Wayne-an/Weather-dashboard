export function ForecastCard(day) {
  return `
    <div class="bg-white/70 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-4 text-center border border-white/40 dark:border-slate-700 transition-all duration-300">

      <p class="font-semibold text-slate-800 dark:text-white">
        ${day.day}
      </p>

      <p class="text-4xl my-3">
        ${day.icon}
      </p>

      <p class="text-lg font-bold text-slate-800 dark:text-white">
        ${day.max}°
      </p>

      <p class="text-slate-500 dark:text-slate-400">
        ${day.min}°
      </p>

    </div>
  `;
}