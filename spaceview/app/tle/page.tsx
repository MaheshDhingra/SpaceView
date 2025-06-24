"use client";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";

export interface TleApiResponse {
  satelliteId: number;
  name: string;
  date: string;
  line1: string;
  line2: string;
}

export default function TLEPage() {
  const [tle, setTle] = useState<TleApiResponse | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("https://tle.ivanstanojevic.me/api/tle/25544") // ISS example
      .then(res => res.json())
      .then(setTle)
      .catch(() => setError("Could not fetch TLE data."));
  }, []);
  return (
    <Layout>
      <section className="w-full max-w-2xl mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-white">TLE (Satellite Orbits)</h1>
        {error && <p className="text-red-400">{error}</p>}
        {tle ? (
          <div className="bg-black border border-white/20 rounded-xl p-6 shadow-lg mt-4">
            <p className="text-white font-mono text-sm mb-2">{tle.name}</p>
            <pre className="text-gray-200 text-xs whitespace-pre-wrap">{tle.line1 + "\n" + tle.line2}</pre>
          </div>
        ) : !error && <p className="text-gray-400">Loading...</p>}
      </section>
    </Layout>
  );
}
