"use client";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";

interface MeteorShower {
  name: string;
  activity: string;
}

export default function MeteorsPage() {
  const [meteors, setMeteors] = useState<MeteorShower[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setError("");
    setLoading(true);
    fetch("https://www.meteorshowers.org/api")
      .then(res => res.json())
      .then(setMeteors)
      .catch(() => setError("Could not fetch meteor data."))
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <section className="w-full max-w-2xl mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-white">Meteor Showers</h1>
        {error && (
          <div className="mb-4">
            <p className="text-red-400">{error}</p>
            <button onClick={fetchData} className="mt-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Retry</button>
          </div>
        )}
        {loading && <p className="text-gray-400">Loading...</p>}
        {meteors && !error && !loading ? (
          <ul className="text-gray-200 text-left space-y-2 mt-4">
            {meteors.map((m: MeteorShower, i: number) => (
              <li key={i} className="border-b border-white/10 pb-2 mb-2">
                <span className="font-bold">{m.name}</span> ({m.activity})
              </li>
            ))}
          </ul>
        ) : null}
      </section>
    </Layout>
  );
}
