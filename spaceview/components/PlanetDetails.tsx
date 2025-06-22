"use client";

import React, { useEffect, useState } from 'react';

interface PlanetDetailsProps {
  planetId: string;
}

export default function PlanetDetails({ planetId }: PlanetDetailsProps) {
  const [planet, setPlanet] = useState<any>(null);
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
    <div className="space-y-2">
      <h2 className="text-xl font-bold">{planet.englishName}</h2>
      <div>Mass: {planet.mass?.massValue} x 10^{planet.mass?.massExponent} kg</div>
      <div>Gravity: {planet.gravity} m/s²</div>
      <div>Moons: {planet.moons ? planet.moons.length : 0}</div>
      <div>Discovery: {planet.discoveryDate || 'Unknown'}</div>
    </div>
  );
}
