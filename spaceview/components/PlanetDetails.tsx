"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface PlanetDetailsProps {
  planetId: string;
}

interface PlanetData {
  englishName: string;
  mass?: { massValue: number; massExponent: number };
  gravity?: number;
  moons?: { moon: string }[];
  discoveryDate?: string;
}

export default function PlanetDetails({ planetId }: PlanetDetailsProps) {
  const [planet, setPlanet] = useState<PlanetData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetId}`)
      .then(res => res.json())
      .then(data => {
        setPlanet(data);
        setLoading(false);
      });
  }, [planetId]);

  if (loading) return <div>Loading planet details...</div>;
  if (!planet) return <div>Planet not found.</div>;

  return (
    <div className="space-y-4 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl shadow-2xl p-8 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2">{planet.englishName}</h2>
      <div className="text-lg text-gray-200">Mass: {planet.mass ? `${planet.mass.massValue} x 10^${planet.mass.massExponent} kg` : 'Unknown'}</div>
      <div className="text-lg text-gray-200">Gravity: {planet.gravity ?? 'Unknown'} m/s²</div>
      <div className="text-lg text-gray-200">Moons: {planet.moons ? planet.moons.length : 0}</div>
      <div className="text-lg text-gray-200">Discovery: {planet.discoveryDate || 'Unknown'}</div>
    </div>
  );
}
