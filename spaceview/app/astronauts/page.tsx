import AstronautList from '../../components/AstronautList';
import Layout from '../../components/Layout';

export default function AstronautsPage() {
  return (
    <Layout>
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold mb-2 text-indigo-900 dark:text-indigo-300">
          Astronauts
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Meet some of the people who have explored space! Data from SpaceDevs API.
        </p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AstronautList cardMode />
      </div>
    </Layout>
  );
}
