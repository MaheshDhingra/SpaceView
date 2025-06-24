"use client";

import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

const resourceApis = [
	{
		name: "NASA Open APIs",
		url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
		key: "nasa_apod",
	},
	{
		name: "The Space Devs API",
		url: "https://llapi.thespacedevs.com/2.2.0/launch/upcoming/?limit=1",
		key: "spacedevs",
	},
	{
		name: "Solar System OpenData API",
		url: "https://api.le-systeme-solaire.net/rest/bodies/",
		key: "solar_system",
	},
	{ name: "SpaceX API", url: "https://api.spacexdata.com/v5/launches/latest", key: "spacex" },
	{
		name: "Open Meteo (space weather)",
		url: "https://api.open-meteo.com/v1/forecast?latitude=19.8207&longitude=-155.4681&current_weather=true",
		key: "openmeteo",
	},
	{ name: "Meteors API", url: "https://www.meteorshowers.org/api", key: "meteors" },
	{ name: "TLE API (satellite orbits)", url: "https://tle.ivanstanojevic.me/api/tle/25544", key: "tle" },
];

interface ResourceApiResult {
	[key: string]: any;
}

export default function ResourcesPage() {
	const [results, setResults] = useState<ResourceApiResult>({});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		Promise.all(
			resourceApis.map((api) =>
				fetch(api.url)
					.then((res) => res.json())
					.then((data) => ({ key: api.key, data }))
					.catch(() => ({ key: api.key, data: { error: "Failed to fetch" } }))
			)
		).then((resArr) => {
			const out: ResourceApiResult = {};
			resArr.forEach((r) => {
				out[r.key] = r.data;
			});
			setResults(out);
			setLoading(false);
		});
	}, []);
	return (
		<Layout>
			<section className="w-full max-w-3xl mx-auto py-16 px-4 text-center">
				<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
					Space Resources
				</h1>
				<p className="text-xl text-gray-200 mb-6">
					Explore a curated list of free APIs, datasets, and tools for space exploration, astronomy, and science.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
					{loading ? (
						<div className="col-span-full text-center text-gray-400">Loading all APIs...</div>
					) : (
						resourceApis.map((api) => (
							<div
								key={api.key}
								className="bg-black border border-white/20 rounded-xl p-4 shadow text-left overflow-x-auto"
							>
								<h2 className="font-bold text-white mb-2 text-lg">{api.name}</h2>
								<pre className="text-xs text-gray-200 whitespace-pre-wrap max-h-64 overflow-y-auto">
									{results[api.key]?.error
										? results[api.key].error
										: JSON.stringify(results[api.key], null, 2)}
								</pre>
							</div>
						))
					)}
				</div>
			</section>
		</Layout>
	);
}
