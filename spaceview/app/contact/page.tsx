"use client";

import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

interface GithubIssue {
  id: number;
  number: number;
  title: string;
  html_url: string;
  user: { login: string; html_url: string };
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  body?: string;
  [key: string]: any;
}

export default function ContactPage() {
  const [github, setGithub] = useState<GithubIssue[] | { error: string } | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.github.com/repos/nasa/apod-api/issues?per_page=3")
      .then(res => res.json())
      .then(setGithub)
      .catch(() => setGithub({ error: "Failed to fetch" }))
      .finally(() => setLoading(false));
  }, []);
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
          <div className="mt-6 bg-black border border-white/20 rounded-xl p-4">
            <h2 className="font-bold text-white mb-2 text-lg">Recent NASA APOD GitHub Issues</h2>
            {loading ? <p className="text-gray-400">Loading...</p> : (
              <pre className="text-xs text-gray-200 whitespace-pre-wrap max-h-64 overflow-y-auto">
                {github && !Array.isArray(github) && 'error' in github
                  ? github.error
                  : JSON.stringify(github, null, 2)}
              </pre>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
