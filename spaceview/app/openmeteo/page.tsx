"use client";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";

interface CurrentWeather {
  time: string;
  interval: number;
  temperature: number;
  windspeed: number;
  winddirection: number;
  is_day: number;
  weathercode: number;
}
interface OpenMeteoApiResponse {
  current_weather: CurrentWeather;
}

export default function OpenMeteoPage() {
  const [weather, setWeather] = useState<OpenMeteoApiResponse | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    // Example: fetch current weather for Mauna Kea Observatory
    fetch("https://api.open-meteo.com/v1/forecast?latitude=19.8207&longitude=-155.4681&current_weather=true")
      .then(res => res.json())
      .then(setWeather)
      .catch(() => setError("Could not fetch weather data."));
  }, []);
  return (
    <Layout>
      <section className="w-full max-w-2xl mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-white">Open Meteo (Space Weather)</h1>
        {error && <p className="text-red-400">{error}</p>}
        {weather && weather.current_weather ? (
          <div className="bg-black border border-white/20 rounded-xl p-6 shadow-lg mt-4">
            <p className="text-white font-mono text-sm mb-2">Temperature: {weather.current_weather.temperature}°C</p>
            <p className="text-gray-200 text-xs">Wind: {weather.current_weather.windspeed} km/h</p>
            <p className="text-gray-200 text-xs">Weather code: {weather.current_weather.weathercode}</p>
          </div>
        ) : !error && <p className="text-gray-400">Loading...</p>}
      </section>
    </Layout>
  );
}
