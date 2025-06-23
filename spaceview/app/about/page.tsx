import Layout from "../../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <section className="w-full max-w-3xl mx-auto py-16 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
          About SpaceView
        </h1>
        <p className="text-xl text-gray-200 mb-6">
          SpaceView is your interactive portal to the wonders of our solar system and the people who explore it. Discover planets, astronauts, and live space data from real APIs—all in a beautiful, modern interface.
        </p>
        <div className="text-gray-400 text-lg">
          <p>Created by passionate space enthusiasts. Powered by NASA, SpaceX, and other open APIs.</p>
        </div>
      </section>
    </Layout>
  );
}
