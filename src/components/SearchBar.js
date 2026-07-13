export function SearchBar() {
  return `
    <section class="py-8">
      <form id="search-form" class="max-w-xl mx-auto flex gap-3">

        <input
          id="city-input"
          type="text"
          placeholder="Search for a city..."
          class="flex-1 rounded-xl
                 border border-slate-200 dark:border-slate-700
                 bg-white dark:bg-slate-800
                 text-slate-800 dark:text-white
                 placeholder:text-slate-400 dark:placeholder:text-slate-500
                 p-4 shadow-sm
                 focus:outline-none
                 focus:ring-2 focus:ring-sky-400"
        />

        <button
          type="submit"
          class="bg-sky-600 hover:bg-sky-700 text-white px-6 rounded-xl transition"
        >
          Search
        </button>

        <button
          type="button"
          id="location-btn"
          class="bg-white dark:bg-slate-800
                 text-slate-800 dark:text-white
                 border border-slate-200 dark:border-slate-700
                 px-4 rounded-xl
                 shadow-sm
                 hover:bg-slate-100 dark:hover:bg-slate-700
                 transition"
        >
          📍
        </button>

      </form>
    </section>
  `;
}