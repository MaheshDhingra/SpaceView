import Layout from "../../components/Layout";

export default function ContactPage() {
  return (
    <Layout>
      <section className="w-full max-w-3xl mx-auto py-16 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
          Contact
        </h1>
        <p className="text-xl text-gray-200 mb-6">
          Have questions, suggestions, or want to collaborate? Reach out to the SpaceView team!
        </p>
        <div className="text-gray-400 text-lg">
          <p>Email: <a href="mailto:spaceview@example.com" className="underline hover:text-blue-300">spaceview@example.com</a></p>
          <p className="mt-2">Or open an issue on our <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">GitHub</a>.</p>
        </div>
      </section>
    </Layout>
  );
}
