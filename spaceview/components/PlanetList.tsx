"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Planet {
  id: string;
  englishName: string;
  isPlanet: boolean;
}

export default function PlanetList({ cardMode = false }: { cardMode?: boolean }) {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true')
      .then(res => res.json())
      .then(data => {
        setPlanets(data.bodies);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center text-gray-300 py-8">Loading planets...</div>;

  const filtered = planets.filter(p => p.englishName.toLowerCase().includes(search.toLowerCase()));

  // Helper to get planet image from Wikimedia
  const getPlanetImage = (name: string) => {
    const images: Record<string, string> = {
      Mercury: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg',
      Venus: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg',
      Earth: 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg',
      Mars: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
      Jupiter: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg',
      Saturn: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg',
      Uranus: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg',
      Neptune: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg',
    };
    return images[name] || 'https://upload.wikimedia.org/wikipedia/commons/6/6f/SpaceX_Demo-2_Launch_%28NHQ202005300026%29.jpg';
  };

  function goToRandomPlanet() {
    if (!filtered.length) return;
    const random = filtered[Math.floor(Math.random() * filtered.length)];
    window.location.href = `/planets/${random.id}`;
  }

  return (
    <div>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search planets..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-4 py-2 rounded-full bg-black border border-white/20 text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button onClick={goToRandomPlanet} className="px-4 py-2 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition border border-white/20">Random</button>
      </div>
      <ul className={cardMode ? 'grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'space-y-2'}>
        {filtered.map(planet => (
          <li key={planet.id} className={cardMode ? 'bg-white/5 border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform min-h-[200px]' : ''}>
            <Link href={`/planets/${planet.id}`} className="text-blue-200 hover:underline flex flex-col items-center">
              {cardMode && (
                <img
                  src={getPlanetImage(planet.englishName)}
                  alt={planet.englishName}
                  className="w-24 h-24 object-cover rounded-full mb-3 border-2 border-blue-200 shadow"
                />
              )}
              <span className="text-lg font-semibold mb-1 text-white tracking-wide">{planet.englishName}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
