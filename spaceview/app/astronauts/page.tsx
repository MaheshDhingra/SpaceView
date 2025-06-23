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
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">🛰️ More Free Space APIs</h2>
          <ul className="text-indigo-200 text-lg list-disc list-inside space-y-1">
            <li><a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-300">NASA Open APIs</a></li>
            <li><a href="http://open-notify.org/Open-Notify-API/" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-300">Open Notify (ISS, astronauts)</a></li>
            <li><a href="https://api.le-systeme-solaire.net/" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-300">Solar System OpenData API</a></li>
            <li><a href="https://github.com/r-spacex/SpaceX-API" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-300">SpaceX API</a></li>
            <li><a href="https://thespacedevs.com/llapi" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-300">The Space Devs API</a></li>
            <li><a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-300">Astronomy Picture of the Day (APOD)</a></li>
            <li><a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-300">Mars Rover Photos</a></li>
            <li><a href="https://www.minorplanetcenter.net/web_service" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-300">Minor Planet Center API</a></li>
            <li><a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-300">Open Meteo (space weather)</a></li>
            <li><a href="https://www.meteorshowers.org/api" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-300">Meteors API</a></li>
            <li><a href="https://tle.ivanstanojevic.me/api/tle/" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-300">TLE API (satellite orbits)</a></li>
            <li><a href="https://llapi.thespacedevs.com/2.2.0/swagger/" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-300">Launch Library 2</a></li>
          </ul>
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AstronautList cardMode />
      </div>
    </Layout>
  );
}
