// @ts-nocheck
// Utility to fetch weather data from OpenWeatherMap for a given city
export const OPENWEATHERMAP_API_KEY = "YOUR_API_KEY_HERE"; // <-- Paste your key here

export async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)},IN&appid=${OPENWEATHERMAP_API_KEY}&units=metric`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Weather fetch failed');
  return await res.json();
}
