"use client";

import PlanetList from '../../components/PlanetList';
import Layout from '../../components/Layout';

export default function PlanetsPage() {
  return (
    <Layout>
      <section className="w-full max-w-7xl mx-auto py-16 px-2 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold mb-8 text-white text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
          Planets of the Solar System
        </h1>
        <p className="text-2xl text-gray-200 max-w-3xl mx-auto font-light text-center mb-12">
          Explore fascinating facts about each planet in our solar system. Click on a planet to learn more!
        </p>
        <div className="grid grid-cols-1 gap-10">
          <PlanetList cardMode />
        </div>
      </section>
    </Layout>
  );
}
