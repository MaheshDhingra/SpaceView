import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout>
			<section className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 px-4">
				<h1 className="text-5xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2 drop-shadow-lg">
					Welcome to SpaceView
				</h1>
				<p className="text-xl text-gray-200 max-w-3xl mx-auto font-light">
					Discover the wonders of our solar system and the people who explore it.
					<br className="hidden sm:block" />
					Browse planets, astronauts, and more!
				</p>
				<div className="flex gap-4 justify-center mt-4">
					<a
						href="/planets"
						className="px-7 py-3 rounded-full bg-white text-black font-semibold shadow hover:bg-gray-200 transition border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
					>
						Explore Planets
					</a>
					<a
						href="/astronauts"
						className="px-7 py-3 rounded-full bg-black text-white border border-white/20 font-semibold shadow hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
					>
						Meet Astronauts
					</a>
				</div>
			</section>
		</Layout>
	);
}
