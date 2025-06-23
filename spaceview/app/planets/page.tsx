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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <PlanetList cardMode />
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto py-16 px-2 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-blue-200 mb-2">🌌 Free Space APIs You Can Use</h2>
        <ul className="text-blue-100 text-lg list-disc list-inside space-y-1">
          <li><a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">NASA Open APIs</a></li>
          <li><a href="http://open-notify.org/Open-Notify-API/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Open Notify (ISS, astronauts)</a></li>
          <li><a href="https://api.le-systeme-solaire.net/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Solar System OpenData API</a></li>
          <li><a href="https://github.com/r-spacex/SpaceX-API" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">SpaceX API</a></li>
          <li><a href="https://thespacedevs.com/llapi" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">The Space Devs API</a></li>
          <li><a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Astronomy Picture of the Day (APOD)</a></li>
          <li><a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Mars Rover Photos</a></li>
          <li><a href="https://www.minorplanetcenter.net/web_service" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Minor Planet Center API</a></li>
          <li><a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Open Meteo (space weather)</a></li>
          <li><a href="https://www.meteorshowers.org/api" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Meteors API</a></li>
          <li><a href="https://tle.ivanstanojevic.me/api/tle/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">TLE API (satellite orbits)</a></li>
          <li><a href="https://llapi.thespacedevs.com/2.2.0/swagger/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Launch Library 2</a></li>
        </ul>
      </section>
    </Layout>
  );
}
