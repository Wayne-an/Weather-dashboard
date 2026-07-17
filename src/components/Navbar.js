export function Navbar() {
  return `
    <header class="flex justify-between items-center max-w-6xl mx-auto py-6">

      <h1 class="text-3xl font-bold text-slate-800 dark:text-white">
        🌤️ Weather Dashboard
      </h1>

      <button
         id="theme-toggle"
         class="bg-white dark:bg-slate-800
         dark:text-white
         border border-slate-300 dark:border-slate-700
         px-4 py-2 rounded-xl
         shadow
         hover:scale-105
         transition-all duration-300"
>
  🌙
</button>

    </header>
  `;
}