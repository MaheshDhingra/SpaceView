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
  owner: { login: string; avatar_url: string; html_url: string };
}

const POPULAR_REPOS = [
  "nasa/apod-api",
  "nasa/NASA-Open-APIs",
  "thespacedevs/llapi",
  "r-spacex/SpaceX-API",
  "OpenAstronomy/astropy",
  "OpenSpace/OpenSpace",
  "cosmos-io/cosmos",
];

export default function AboutPage() {
  const [repos, setRepos] = useState<(GithubRepo | { error: string })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all(
      POPULAR_REPOS.map(repo =>
        fetch(`https://api.github.com/repos/${repo}`)
          .then(res => res.ok ? res.json() : Promise.reject(res))
          .catch(async (err) => {
            let msg = "Failed to fetch";
            if (err && err.json) {
              try {
                const data = await err.json();
                msg = data.message || msg;
              } catch {}
            }
            return { error: msg };
          })
      )
    ).then(setRepos).finally(() => setLoading(false));
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
            <h2 className="font-bold text-white mb-2 text-lg">Popular Space-Related GitHub Repos</h2>
            {loading ? <p className="text-gray-400">Loading...</p> : (
              <div className="grid grid-cols-1 gap-6">
                {repos.map((repo, i) => {
                  if ('error' in repo) {
                    // Handle error as string or as an object with a message property
                    const errorMsg = typeof repo.error === 'string' ? repo.error : (repo.error && typeof repo.error === 'object' && 'message' in repo.error ? (repo.error as any).message : 'Unknown error');
                    return <div key={i} className="text-red-400">{errorMsg}</div>;
                  }
                  // Defensive: skip if repo is not an object or missing expected fields
                  if (!repo || typeof repo !== 'object' || !repo.id || !repo.owner) return null;
                  return (
                    <div key={repo.id} className="flex items-center gap-4 bg-black/80 border border-white/10 rounded-lg p-4">
                      <img src={repo.owner.avatar_url} alt={repo.owner.login} className="w-10 h-10 rounded-full border border-white/10" />
                      <div className="flex-1">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-300 underline text-lg">{repo.full_name}</a>
                        <p className="text-gray-300 mt-1 mb-2 text-sm">{repo.description}</p>
                        <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-2">
                          <span>⭐ {repo.stargazers_count} stars</span>
                          <span>🍴 {repo.forks_count} forks</span>
                          <span>🐛 {repo.open_issues_count} open issues</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
