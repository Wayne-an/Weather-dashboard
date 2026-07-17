export function loadTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  updateThemeButton();
}

export function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  updateThemeButton();
}

export function updateThemeButton() {
  const button = document.querySelector("#theme-toggle");

  if (!button) return;

  const isDark = document.documentElement.classList.contains("dark");

  button.textContent = isDark ? "☀️" : "🌙";
}