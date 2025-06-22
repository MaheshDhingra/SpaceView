import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex gap-8 p-4 border-b mb-6 items-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-lg">
      <Link href="/" className="flex items-center gap-2 text-xl font-bold">
        <img src="/globe.svg" alt="SpaceView Logo" className="w-8 h-8" />
        SpaceView
      </Link>
      <div className="flex gap-6 ml-8">
        <Link href="/">Home</Link>
        <Link href="/planets">Planets</Link>
        <Link href="/astronauts">Astronauts</Link>
      </div>
    </nav>
  );
}
