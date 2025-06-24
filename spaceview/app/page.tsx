"use client";

import Layout from "../components/Layout";
import ConstellationBackground from "../components/ConstellationBackground";
import { useEffect, useState } from "react";
import { FaRocket, FaUserAstronaut, FaGlobe, FaSatellite, FaSpaceShuttle, FaCamera } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const spaceFacts = [
	"A day on Venus is longer than its year!",
	"Neutron stars can spin at a rate of 600 rotations per second.",
	"There are more trees on Earth than stars in the Milky Way.",
	"Jupiter has 95 known moons!",
	"The hottest planet in our solar system is Venus.",
	"A spoonful of a neutron star weighs about a billion tons."
];

interface ApodResponse {
  url: string;
  title: string;
  explanation: string;
  [key: string]: any;
}
interface IssResponse {
  iss_position: { latitude: number; longitude: number };
  [key: string]: any;
}
interface SpacexResponse {
  name: string;
  date_utc: string;
  [key: string]: any;
}
interface MarsPhoto {
  img_src: string;
  earth_date: string;
  [key: string]: any;
}

export default function Home() {
	const [fact, setFact] = useState("");
	const [subtitle, setSubtitle] = useState("");
	const [apod, setApod] = useState<ApodResponse | null>(null);
	const [iss, setIss] = useState<IssResponse | null>(null);
	const [spacex, setSpacex] = useState<SpacexResponse | null>(null);
	const [mars, setMars] = useState<MarsPhoto | null>(null);
	const [loading, setLoading] = useState({ apod: true, iss: true, spacex: true, mars: true });
	const [error, setError] = useState({ apod: '', iss: '', spacex: '', mars: '' });
	const subtitles = [
		"Explore the cosmos from your screen...",
		"Unravel mysteries of the universe!",
		"Your journey to the stars begins here.",
		"Discover planets, astronauts, and more!"
	];

	useEffect(() => {
		setFact(spaceFacts[Math.floor(Math.random() * spaceFacts.length)]);
		let i = 0;
		const interval = setInterval(() => {
			setSubtitle(subtitles[i]);
			i = (i + 1) % subtitles.length;
		}, 2500);
		// NASA APOD
		fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
			.then(res => {
				if (!res.ok) throw new Error('Failed to fetch APOD');
				return res.json();
			})
			.then(data => setApod(data))
			.catch(() => setError(e => ({ ...e, apod: 'Could not load APOD.' })))
			.finally(() => setLoading(l => ({ ...l, apod: false })));
		// ISS Location
		fetch('https://api.wheretheiss.at/v1/satellites/25544')
			.then(res => {
				if (!res.ok) throw new Error('Failed to fetch ISS');
				return res.json();
			})
			.then(data => setIss({ iss_position: { latitude: data.latitude, longitude: data.longitude } }))
			.catch(() => setError(e => ({ ...e, iss: 'Could not load ISS location.' })))
			.finally(() => setLoading(l => ({ ...l, iss: false })));
		// SpaceX latest launch
		fetch('https://api.spacexdata.com/v5/launches/latest')
			.then(res => {
				if (!res.ok) throw new Error('Failed to fetch SpaceX');
				return res.json();
			})
			.then(setSpacex)
			.catch(() => setError(e => ({ ...e, spacex: 'Could not load SpaceX launch.' })))
			.finally(() => setLoading(l => ({ ...l, spacex: false })));
		// Mars Rover photo
		fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=DEMO_KEY')
			.then(res => {
				if (!res.ok) throw new Error('Failed to fetch Mars photo');
				return res.json();
			})
			.then(data => setMars(data.latest_photos?.[0]))
			.catch(() => setError(e => ({ ...e, mars: 'Could not load Mars photo.' })))
			.finally(() => setLoading(l => ({ ...l, mars: false })));
		return () => clearInterval(interval);
	}, [subtitles]);

	return (
		<Layout>
			<div className="relative w-full min-h-[60vh]">
				<ConstellationBackground />
				<section className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 px-4 relative z-10">
					<h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2 drop-shadow-lg animate-fade-in">
						Welcome to SpaceView
					</h1>
					<p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light animate-fade-in-slow min-h-[2.5rem]">
						{subtitle}
					</p>
					<p className="text-xl text-gray-200 max-w-3xl mx-auto font-light">
						Discover the wonders of our solar system and the people who explore it.
						<br className="hidden sm:block" />
						Browse planets, astronauts, and more!
					</p>
					<div className="flex gap-4 justify-center mt-4 flex-wrap">
						<Link
							href="/planets"
							className="flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black font-semibold shadow hover:bg-gray-200 transition border border-white/20 focus:outline-none focus:ring-2 focus:ring-white hover:scale-105 duration-200"
						>
							<FaGlobe /> Explore Planets
						</Link>
						<Link
							href="/astronauts"
							className="flex items-center gap-2 px-7 py-3 rounded-full bg-black text-white border border-white/20 font-semibold shadow hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-white hover:scale-105 duration-200"
						>
							<FaUserAstronaut /> Meet Astronauts
						</Link>
						<Link
							href="/resources"
							className="flex items-center gap-2 px-7 py-3 rounded-full bg-black text-white border border-white/20 font-semibold shadow hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-white hover:scale-105 duration-200"
						>
							<FaRocket /> Resources
						</Link>
						<Link
							href="/about"
							className="flex items-center gap-2 px-7 py-3 rounded-full bg-black text-white border border-white/20 font-semibold shadow hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-white hover:scale-105 duration-200"
						>
							About
						</Link>
						<Link
							href="/contact"
							className="flex items-center gap-2 px-7 py-3 rounded-full bg-black text-white border border-white/20 font-semibold shadow hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-white hover:scale-105 duration-200"
						>
							Contact
						</Link>
						<Link
							href="/planets?random=true"
							className="flex items-center gap-2 px-7 py-3 rounded-full bg-black text-white border border-white/20 font-semibold shadow hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-white hover:scale-105 duration-200"
						>
							<FaRocket /> Surprise Me!
						</Link>
					</div>
					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch justify-center w-full max-w-5xl">
						<div className="bg-black/80 border border-white/20 rounded-2xl p-6 shadow-xl flex flex-col items-center min-h-[180px]">
							<h2 className="text-lg font-bold text-white mb-2">🌠 Random Space Fact</h2>
							<p className="text-gray-200">{fact}</p>
						</div>
						{/* APOD Card */}
						<div className="bg-black/80 border border-white/20 rounded-2xl p-6 shadow-xl flex flex-col items-center min-h-[180px]">
							{loading.apod ? (
								<p className="text-gray-400">Loading...</p>
							) : error.apod ? (
								<p className="text-red-400">{error.apod}</p>
							) : apod ? (
								<>
									<h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><FaCamera /> NASA APOD</h2>
									<Image src={apod.url} alt={apod.title || 'NASA APOD'} width={320} height={128} className="w-full h-32 object-cover rounded mb-2" />
									<p className="text-gray-200 text-sm mb-1">{apod.title}</p>
									<p className="text-gray-400 text-xs">{apod.date}</p>
								</>
							) : null}
						</div>
						{/* ISS Card */}
						<div className="bg-black/80 border border-white/20 rounded-2xl p-6 shadow-xl flex flex-col items-center min-h-[180px]">
							{loading.iss ? (
								<p className="text-gray-400">Loading...</p>
							) : error.iss ? (
								<p className="text-red-400">{error.iss}</p>
							) : iss && iss.iss_position ? (
								<>
									<h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><FaSatellite /> ISS Location</h2>
									<p className="text-gray-200">Lat: {iss.iss_position.latitude.toFixed(2)}, Lon: {iss.iss_position.longitude.toFixed(2)}</p>
								</>
							) : null}
						</div>
						{/* SpaceX Card */}
						<div className="bg-black/80 border border-white/20 rounded-2xl p-6 shadow-xl flex flex-col items-center min-h-[180px]">
							{loading.spacex ? (
								<p className="text-gray-400">Loading...</p>
							) : error.spacex ? (
								<p className="text-red-400">{error.spacex}</p>
							) : spacex ? (
								<>
									<h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><FaSpaceShuttle /> Latest SpaceX Launch</h2>
									<p className="text-gray-200 font-bold">{spacex.name}</p>
									<p className="text-gray-400 text-xs">{spacex.date_utc?.slice(0,10)}</p>
									{spacex.links?.webcast && (
										<a href={spacex.links.webcast} target="_blank" rel="noopener noreferrer" className="underline text-blue-300">Watch Launch</a>
									)}
								</>
							) : null}
						</div>
						{/* Mars Rover Card */}
						<div className="bg-black/80 border border-white/20 rounded-2xl p-6 shadow-xl flex flex-col items-center min-h-[180px]">
							{loading.mars ? (
								<p className="text-gray-400">Loading...</p>
							) : error.mars ? (
								<p className="text-red-400">{error.mars}</p>
							) : mars ? (
								<>
									<h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><FaRocket /> Mars Rover Photo</h2>
									<Image src={mars.img_src} alt="Mars Rover" width={320} height={128} className="w-full h-32 object-cover rounded mb-2" />
									<p className="text-gray-400 text-xs">{mars.earth_date}</p>
								</>
							) : null}
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
}

// Animations (add to your global CSS if not present):
// .animate-fade-in { animation: fadeIn 1s ease; }
// .animate-fade-in-slow { animation: fadeIn 2s ease; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
