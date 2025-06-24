"use client";

import { useEffect, useState } from "react";
import PlanetList from '../../components/PlanetList';
import Layout from '../../components/Layout';

const apiList = [
  { name: "NASA Open APIs", url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", key: "nasa_apod" },
  { name: "Open Notify (ISS, astronauts)", url: "http://api.open-notify.org/iss-now.json", key: "open_notify" },
  { name: "Solar System OpenData API", url: "https://api.le-systeme-solaire.net/rest/bodies/", key: "solar_system" },
  { name: "SpaceX API", url: "https://api.spacexdata.com/v5/launches/latest", key: "spacex" },
  { name: "The Space Devs API", url: "https://llapi.thespacedevs.com/2.2.0/launch/upcoming/?limit=1", key: "spacedevs" },
  { name: "Astronomy Picture of the Day (APOD)", url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", key: "apod" },
  { name: "Mars Rover Photos", url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=DEMO_KEY", key: "mars" },
  { name: "Minor Planet Center API", url: "https://www.minorplanetcenter.net/web_service/search_orbits?number=1", key: "mpc" },
  { name: "Open Meteo (space weather)", url: "https://api.open-meteo.com/v1/forecast?latitude=19.8207&longitude=-155.4681&current_weather=true", key: "openmeteo" },
  { name: "Meteors API", url: "https://www.meteorshowers.org/api", key: "meteors" },
  { name: "TLE API (satellite orbits)", url: "https://tle.ivanstanojevic.me/api/tle/25544", key: "tle" },
  { name: "Launch Library 2", url: "https://llapi.thespacedevs.com/2.2.0/launch/upcoming/?limit=1", key: "launchlib" },
];

interface ApiResult {
  [key: string]: any;
}

export default function PlanetsPage() {
  const [results, setResults] = useState<ApiResult>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all(apiList.map(api =>
      fetch(api.url)
        .then(res => res.json())
        .then(data => ({ key: api.key, data }))
        .catch(() => ({ key: api.key, data: { error: 'Failed to fetch' } }))
    )).then(resArr => {
      const out: ApiResult = {};
      resArr.forEach(r => { out[r.key] = r.data; });
      setResults(out);
      setLoading(false);
    });
  }, []);

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
