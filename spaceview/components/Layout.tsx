import Navbar from './Navbar';
import React from 'react';
import ConstellationBackground from '../components/ConstellationBackground';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-x-hidden">
      <ConstellationBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="flex-1 max-w-4xl mx-auto p-4 w-full">{children}</main>
        <footer className="text-center py-6 text-gray-400 text-sm border-t border-white/10 mt-8">
          SpaceView &copy; {new Date().getFullYear()} &mdash; Powered by public APIs and Next.js
        </footer>
      </div>
    </div>
  );
}
