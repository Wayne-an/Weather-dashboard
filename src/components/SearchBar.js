export function SearchBar() {
  return `
    <section class="py-8">
      <form id="search-form" class="max-w-xl mx-auto flex gap-3">

        <input
          id="city-input"
          type="text"
          placeholder="Search for a city..."
          class="flex-1 rounded-xl border border-slate-200 p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
        />

        <button
          type="submit"
          class="bg-sky-600 hover:bg-sky-700 text-white px-6 rounded-xl transition"
        >
          Search
        </button>

      </form>
    </section>
  `;
}