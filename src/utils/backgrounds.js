export function getBackground(condition) {
  switch (condition) {
    case "Clear":
      return "from-sky-400 via-sky-200 to-blue-100";

    case "Partly Cloudy":
      return "from-slate-300 via-slate-200 to-sky-100";

    case "Cloudy":
      return "from-slate-500 via-slate-400 to-slate-300";

    case "Rain":
      return "from-slate-700 via-blue-700 to-slate-900";

    case "Thunderstorm":
      return "from-gray-900 via-slate-800 to-blue-950";

    case "Snow":
      return "from-slate-100 via-white to-blue-100";

    default:
      return "from-sky-400 via-sky-200 to-blue-100";
  }
}