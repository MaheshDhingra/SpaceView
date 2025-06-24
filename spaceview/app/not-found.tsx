import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-2xl mb-8">Page Not Found</p>
      <Link href="/" className="px-6 py-3 rounded-full bg-white text-black font-semibold shadow hover:bg-gray-200 transition border border-white/20">Go Home</Link>
    </div>
  );
}
