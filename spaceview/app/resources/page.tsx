import Layout from "../../components/Layout";

export default function ResourcesPage() {
  return (
    <Layout>
      <section className="w-full max-w-3xl mx-auto py-16 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
          Space Resources
        </h1>
        <p className="text-xl text-gray-200 mb-6">
          Explore a curated list of free APIs, datasets, and tools for space exploration, astronomy, and science.
        </p>
        <ul className="text-blue-100 text-lg list-disc list-inside space-y-2 text-left mx-auto max-w-xl">
          <li><a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">NASA Open APIs</a></li>
          <li><a href="https://thespacedevs.com/llapi" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">The Space Devs API</a></li>
          <li><a href="https://api.le-systeme-solaire.net/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Solar System OpenData API</a></li>
          <li><a href="https://github.com/r-spacex/SpaceX-API" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">SpaceX API</a></li>
          <li><a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Open Meteo (space weather)</a></li>
          <li><a href="https://www.meteorshowers.org/api" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Meteors API</a></li>
          <li><a href="https://tle.ivanstanojevic.me/api/tle/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">TLE API (satellite orbits)</a></li>
        </ul>
      </section>
    </Layout>
  );
}
