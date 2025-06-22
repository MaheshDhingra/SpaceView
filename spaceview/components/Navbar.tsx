import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-white/10 bg-black/80 backdrop-blur sticky top-0 z-50 shadow-lg">
      <Link href="/" className="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-white hover:opacity-80 transition">
        <Image src="/globe.svg" alt="SpaceView Logo" width={36} height={36} className="dark:invert" />
        <span>SpaceView</span>
      </Link>
      <div className="flex gap-6 text-lg font-medium">
        <Link href="/" className="text-white hover:text-blue-300 transition">Home</Link>
        <Link href="/planets" className="text-white hover:text-blue-300 transition">Planets</Link>
        <Link href="/astronauts" className="text-white hover:text-blue-300 transition">Astronauts</Link>
      </div>
    </nav>
  );
}
