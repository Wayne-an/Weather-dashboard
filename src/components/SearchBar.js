export function SearchBar() {
  return `
    <section class="py-8">

      <div class="max-w-xl mx-auto">

        <input
          type="text"
          placeholder="🔍 Search for a city..."
          class="
            w-full
            rounded-xl
            border
            border-slate-200
            p-4
            shadow-sm
            focus:outline-none
            focus:ring-2
            focus:ring-sky-400
          "
        />

      </div>

    </section>
  `;
}