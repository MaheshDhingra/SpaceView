import Image from "next/image";
import Layout from "../components/Layout";
import NestedComponent from "../components/NestedComponent";

const features = [
	{
		icon: "/globe.svg",
		title: "Live Planet Data",
		desc: "Up-to-date info on all solar system planets, with images and facts.",
	},
	{
		icon: "/window.svg",
		title: "Astronaut Explorer",
		desc: "Browse astronauts, their missions, and nationalities.",
	},
	{
		icon: "/file.svg",
		title: "Constellation Background",
		desc: "Animated, interactive starfield for a cosmic vibe.",
	},
	{
		icon: "/next.svg",
		title: "Responsive Design",
		desc: "Looks great on all devices, from mobile to desktop.",
	},
	{
		icon: "/vercel.svg",
		title: "Dark/Light Mode",
		desc: "Automatic color scheme for your system preference.",
	},
	{
		icon: "/globe.svg",
		title: "Planet Details",
		desc: "Click any planet for mass, gravity, moons, and discovery info.",
	},
	{
		icon: "/window.svg",
		title: "Astronaut Cards",
		desc: "See astronaut portraits, birth dates, and more.",
	},
	{
		icon: "/file.svg",
		title: "Quick Navigation",
		desc: "Jump between planets, astronauts, and home instantly.",
	},
	{
		icon: "/next.svg",
		title: "Modern UI",
		desc: "Sleek, minimal, and beautiful interface.",
	},
	{
		icon: "/vercel.svg",
		title: "API Powered",
		desc: "All data comes from open, real-time APIs.",
	},
	{
		icon: "/globe.svg",
		title: "Accessibility",
		desc: "Keyboard navigation and screen reader friendly.",
	},
	{
		icon: "/window.svg",
		title: "Performance",
		desc: "Blazing fast with Next.js and Turbopack.",
	},
	{
		icon: "/file.svg",
		title: "Open Source",
		desc: "Code is open for learning and contribution.",
	},
	{
		icon: "/next.svg",
		title: "Custom Scrollbar",
		desc: "Sleek, themed scrollbar for a premium feel.",
	},
	{
		icon: "/vercel.svg",
		title: "Footer Credits",
		desc: "Always know the source and year at a glance.",
	},
];

export default function Home() {
	return (
		<Layout>
			<section className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
				<h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
					Welcome to SpaceView
				</h1>
				<p className="text-lg text-gray-200 max-w-2xl mx-auto">
					Discover the wonders of our solar system and the people who explore it.
					<br className="hidden sm:block" />
					Browse planets, astronauts, and more!
				</p>
				<div className="flex gap-4 justify-center mt-4">
					<a
						href="/planets"
						className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold shadow transition"
					>
						Explore Planets
					</a>
					<a
						href="/astronauts"
						className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold shadow transition"
					>
						Meet Astronauts
					</a>
				</div>
			</section>
			<section className="max-w-5xl mx-auto py-12">
				<h2 className="text-3xl font-bold mb-8 text-white">Features</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{features.map((f, i) => (
						<div
							key={i}
							className="bg-black/70 border border-white/10 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform"
						>
							<Image
								src={f.icon}
								alt={f.title}
								width={40}
								height={40}
								className="mb-3 dark:invert"
							/>
							<h3 className="text-xl font-semibold mb-2 text-white">
								{f.title}
							</h3>
							<p className="text-gray-300 text-sm">{f.desc}</p>
						</div>
					))}
				</div>
			</section>
		</Layout>
	);
}
