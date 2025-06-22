"use client";

import React, { useEffect, useState } from 'react';

interface Astronaut {
  id: number;
  name: string;
  date_of_birth: string;
  nationality: string;
  profile_image: string | null;
}

export default function AstronautList({ cardMode = false }: { cardMode?: boolean }) {
  const [astronauts, setAstronauts] = useState<Astronaut[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://ll.thespacedevs.com/2.2.0/astronaut/?limit=50')
      .then(res => res.json())
      .then(data => {
        setAstronauts(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center text-gray-300 py-8">Loading astronauts...</div>;

  const filtered = astronauts.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.nationality.toLowerCase().includes(search.toLowerCase())
  );

  function goToRandomAstronaut() {
    if (!filtered.length) return;
    const random = filtered[Math.floor(Math.random() * filtered.length)];
    window.location.href = `/astronauts#astro-${random.id}`;
  }

  return (
    <div>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search astronauts..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-4 py-2 rounded-full bg-black border border-white/20 text-white w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button onClick={goToRandomAstronaut} className="px-4 py-2 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition border border-white/20">Random</button>
      </div>
      <ul className={cardMode ? 'grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'space-y-2'}>
        {filtered.map(astro => (
          <li key={astro.id} id={`astro-${astro.id}`} className={cardMode ? 'bg-white/5 border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform min-h-[200px]' : 'border p-2 rounded'}>
            {cardMode && (
              <img
                src={astro.profile_image || 'https://upload.wikimedia.org/wikipedia/commons/6/6f/SpaceX_Demo-2_Launch_%28NHQ202005300026%29.jpg'}
                alt={astro.name}
                className="w-24 h-24 object-cover rounded-full mb-3 border-2 border-indigo-200 shadow"
              />
            )}
            <div className="font-bold text-lg mb-1 text-white tracking-wide">{astro.name}</div>
            <div className="text-gray-300">Born: {astro.date_of_birth}</div>
            <div className="text-gray-300">Nationality: {astro.nationality}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
