"use client";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import MarsRoverWidget from "../../components/MarsRoverWidget";
import Link from "next/link";

interface MinorPlanet {
  name: string;
  number: string;
  epoch: string;
  a: string;
  e: string;
  i: string;
  [key: string]: any;
}
interface MinorPlanetApiResponse {
  data: MinorPlanet[];
  [key: string]: any;
}

export default function MinorPlanetsPage() {
  const [data, setData] = useState<MinorPlanetApiResponse | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setError("");
    fetch("https://www.minorplanetcenter.net/web_service/search_orbits?number=1")
      .then(res => res.json())
      .then(setData)
      .catch(() => setError("Could not fetch minor planet data. This may be due to CORS or the API being temporarily unavailable."))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <section className="w-full max-w-2xl mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-white">Minor Planet Center</h1>
        {error && (
          <div className="mb-4">
            <p className="text-red-400">{error}</p>
            <button onClick={fetchData} className="mt-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Retry</button>
          </div>
        )}
        {loading && <p className="text-gray-400">Loading...</p>}
        {data && data.data && data.data.length > 0 && !error && !loading && (
          <div className="bg-black border border-white/20 rounded-xl p-6 shadow-lg mt-4">
            <p className="text-white font-mono text-sm mb-2">{data.data[0].name} (#{data.data[0].number})</p>
            <p className="text-gray-200 text-xs">Epoch: {data.data[0].epoch}</p>
            <p className="text-gray-200 text-xs">a: {data.data[0].a}, e: {data.data[0].e}, i: {data.data[0].i}</p>
          </div>
        )}
        <MarsRoverWidget />
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/" className="underline text-blue-300">Home</Link>
          <Link href="/planets" className="underline text-blue-300">Planets</Link>
          <Link href="/astronauts" className="underline text-blue-300">Astronauts</Link>
          <Link href="/resources" className="underline text-blue-300">Resources</Link>
          <Link href="/about" className="underline text-blue-300">About</Link>
          <Link href="/contact" className="underline text-blue-300">Contact</Link>
          <Link href="/meteors" className="underline text-blue-300">Meteors</Link>
          <Link href="/tle" className="underline text-blue-300">TLE</Link>
          <Link href="/openmeteo" className="underline text-blue-300">Open Meteo</Link>
        </div>
      </section>
    </Layout>
  );
}
