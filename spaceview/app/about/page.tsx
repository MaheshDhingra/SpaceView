"use client";

import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

export default function AboutPage() {
  const [github, setGithub] = useState<GithubRepo | { error: string } | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.github.com/repos/nasa/apod-api")
      .then(res => res.json())
      .then(setGithub)
      .catch(() => setGithub({ error: "Failed to fetch" }))
      .finally(() => setLoading(false));
  }, []);
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
          <div className="mt-6 bg-black border border-white/20 rounded-xl p-4">
            <h2 className="font-bold text-white mb-2 text-lg">NASA APOD GitHub Repo</h2>
            {loading ? <p className="text-gray-400">Loading...</p> : (
              github && 'error' in github ? (
                <p className="text-red-400">{github.error}</p>
              ) : github ? (
                <div className="text-left">
                  <a href={github.html_url} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-300 underline text-lg">{github.full_name}</a>
                  <p className="text-gray-300 mt-1 mb-2">{github.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-2">
                    <span>⭐ {github.stargazers_count} stars</span>
                    <span>🍴 {github.forks_count} forks</span>
                    <span>🐛 {github.open_issues_count} open issues</span>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
