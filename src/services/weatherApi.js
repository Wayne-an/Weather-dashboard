const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

/**
 * Get latitude and longitude for a city.
 */
export async function getCoordinates(city) {
  const response = await fetch(
    `${GEO_URL}?name=${encodeURIComponent(city)}&count=1`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch location.");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found.");
  }

  const location = data.results[0];

  return {
    name: location.name,
    country: location.country,
    latitude: location.latitude,
    longitude: location.longitude,
  };
}

/**
 * Get current weather using latitude and longitude.
 */
export async function getCurrentWeather(latitude, longitude) {
  const response = await fetch(
    `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather.");
  }

  const data = await response.json();

  return data.current;
}
export async function getForecast(latitude, longitude) {
  const response = await fetch(
    `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=5`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch forecast.");
  }

  const data = await response.json();

  return data.daily;
}