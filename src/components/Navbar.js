export function Navbar() {
  return `
    <header class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 class="text-2xl font-bold text-sky-600">
          🌤 Weather Dashboard
        </h1>

        <button
          class="rounded-full p-2 hover:bg-slate-100 transition"
          aria-label="Toggle theme"
        >
          🌙
        </button>

      </div>
    </header>
  `;
}