import PlanetList from '../../components/PlanetList';
import Layout from '../../components/Layout';

export default function PlanetsPage() {
  return (
    <Layout>
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold mb-2 text-blue-900 dark:text-blue-300">
          Planets of the Solar System
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore fascinating facts about each planet in our solar system. Click on a planet to learn more!
        </p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <PlanetList cardMode />
      </div>
    </Layout>
  );
}
