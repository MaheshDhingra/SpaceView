"use client";

import Layout from "../components/Layout";
import ConstellationBackground from "../components/ConstellationBackground";
import { useEffect, useState } from "react";
import { FaRocket, FaUserAstronaut, FaGlobe, FaSatellite, FaSpaceShuttle, FaCamera } from "react-icons/fa";
import Link from "next/link";

const spaceFacts = [
	"A day on Venus is longer than its year!",
	"Neutron stars can spin at a rate of 600 rotations per second.",
	"There are more trees on Earth than stars in the Milky Way.",
	"Jupiter has 95 known moons!",
	"The hottest planet in our solar system is Venus.",
	"A spoonful of a neutron star weighs about a billion tons."
];

const featuredPlanet = {
	name: "Jupiter",
	description: "The largest planet in our solar system, famous for its Great Red Spot and dozens of moons.",
	image: "/globe.svg",
	link: "/planets/jupiter"
};

export default function Home() {
	const [fact, setFact] = useState("");
	const [subtitle, setSubtitle] = useState("");
	const [apod, setApod] = useState<any>(null);
	const [iss, setIss] = useState<any>(null);
	const [spacex, setSpacex] = useState<any>(null);
	const [mars, setMars] = useState<any>(null);
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
			.then(res => res.json()).then(setApod);
		// ISS Location
		fetch('http://api.open-notify.org/iss-now.json')
			.then(res => res.json()).then(setIss);
		// SpaceX latest launch
		fetch('https://api.spacexdata.com/v5/launches/latest')
			.then(res => res.json()).then(setSpacex);
		// Mars Rover photo
		fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=DEMO_KEY')
			.then(res => res.json()).then(data => setMars(data.latest_photos?.[0]));
		return () => clearInterval(interval);
	}, []);

	return (
		<Layout>
			<div className="relative w-full min-h-[60vh]">
				<ConstellationBackground />
				<section className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 px-4 relative z-10">
					<h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-2 drop-shadow-lg animate-fade-in">
						Welcome to SpaceView
					</h1>
					<p className="text-lg md:text-2xl text-blue-100 max-w-2xl mx-auto font-light animate-fade-in-slow min-h-[2.5rem]">
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
							className="flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black font-semibold shadow hover:bg-blue-100 transition border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:scale-105 duration-200"
						>
							<FaGlobe /> Explore Planets
						</Link>
						<Link
							href="/astronauts"
							className="flex items-center gap-2 px-7 py-3 rounded-full bg-black text-white border border-white/20 font-semibold shadow hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:scale-105 duration-200"
						>
							<FaUserAstronaut /> Meet Astronauts
						</Link>
						<Link
							href="/resources"
							className="flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 text-white font-semibold shadow hover:bg-indigo-700 transition border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:scale-105 duration-200"
						>
							<FaRocket /> Resources
						</Link>
						<Link
							href="/about"
							className="flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold shadow hover:bg-gray-800 transition border border-white/20 focus:outline-none focus:ring-2 focus:ring-gray-400 hover:scale-105 duration-200"
						>
							About
						</Link>
						<Link
							href="/contact"
							className="flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 hover:scale-105 duration-200"
						>
							Contact
						</Link>
						<Link
							href="/planets?random=true"
							className="flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 hover:scale-105 duration-200"
						>
							<FaRocket /> Surprise Me!
						</Link>
					</div>
					<div className="mt-8 flex flex-col md:flex-row gap-8 items-center justify-center flex-wrap">
						<div className="bg-black/60 border border-blue-200/20 rounded-xl p-6 shadow-lg max-w-xs animate-fade-in">
							<h2 className="text-lg font-bold text-blue-200 mb-2">🌠 Random Space Fact</h2>
							<p className="text-blue-100">{fact}</p>
						</div>
						{apod && (
							<div className="bg-black/60 border border-yellow-200/20 rounded-xl p-6 shadow-lg max-w-xs animate-fade-in">
								<h2 className="text-lg font-bold text-yellow-200 mb-2 flex items-center gap-2"><FaCamera /> NASA APOD</h2>
								<img src={apod.url} alt={apod.title} className="w-full h-32 object-cover rounded mb-2" />
								<p className="text-yellow-100 text-sm mb-1">{apod.title}</p>
								<p className="text-yellow-100 text-xs">{apod.date}</p>
							</div>
						)}
						{iss && iss.iss_position && (
							<div className="bg-black/60 border border-green-200/20 rounded-xl p-6 shadow-lg max-w-xs animate-fade-in">
								<h2 className="text-lg font-bold text-green-200 mb-2 flex items-center gap-2"><FaSatellite /> ISS Location</h2>
								<p className="text-green-100">Lat: {iss.iss_position.latitude}, Lon: {iss.iss_position.longitude}</p>
							</div>
						)}
						{spacex && (
							<div className="bg-black/60 border border-pink-200/20 rounded-xl p-6 shadow-lg max-w-xs animate-fade-in">
								<h2 className="text-lg font-bold text-pink-200 mb-2 flex items-center gap-2"><FaSpaceShuttle /> Latest SpaceX Launch</h2>
								<p className="text-pink-100 font-bold">{spacex.name}</p>
								<p className="text-pink-100 text-xs">{spacex.date_utc?.slice(0,10)}</p>
								<a href={spacex.links?.webcast} target="_blank" rel="noopener noreferrer" className="underline text-pink-300">Watch Launch</a>
							</div>
						)}
						{mars && (
							<div className="bg-black/60 border border-red-200/20 rounded-xl p-6 shadow-lg max-w-xs animate-fade-in">
								<h2 className="text-lg font-bold text-red-200 mb-2 flex items-center gap-2"><FaRocket /> Mars Rover Photo</h2>
								<img src={mars.img_src} alt="Mars Rover" className="w-full h-32 object-cover rounded mb-2" />
								<p className="text-red-100 text-xs">{mars.earth_date}</p>
							</div>
						)}
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
