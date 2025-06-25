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
          <p>Email: <a href="mailto:dhingram447@gmail.com" className="underline hover:text-blue-300">dhingram447@gmail.com</a></p>
          <p className="mt-2">Or open an issue on our <a href="https://github.com/MaheshDhingra/SpaceView" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">GitHub</a>.</p>
          <div className="mt-6 bg-black border border-white/20 rounded-xl p-4">
            <h2 className="font-bold text-white mb-2 text-lg">Recent NASA APOD GitHub Issues</h2>
            {loading ? <p className="text-gray-400">Loading...</p> : (
              <div className="text-left">
                {github && !Array.isArray(github) && 'error' in github ? (
                  <p className="text-red-400">{github.error}</p>
                ) : Array.isArray(github) && github.length > 0 ? (
                  <ul className="space-y-4">
                    {github.map(issue => (
                      <li key={issue.id} className="border-b border-white/10 pb-2">
                        <a href={issue.html_url} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-300 underline">
                          #{issue.number}: {issue.title}
                        </a>
                        <div className="text-xs text-gray-400 mt-1">
                          By <a href={issue.user.html_url} target="_blank" rel="noopener noreferrer" className="underline">{issue.user.login}</a> • {new Date(issue.created_at).toLocaleDateString()} • {issue.state} • 💬 {issue.comments}
                        </div>
                        {issue.body && <p className="mt-1 text-gray-300 text-xs line-clamp-3">{issue.body.slice(0, 200)}{issue.body.length > 200 ? '...' : ''}</p>}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">No recent issues found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
