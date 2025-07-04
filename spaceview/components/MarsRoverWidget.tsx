import { useEffect, useState } from "react";
import Image from "next/image";

interface MarsPhoto {
  img_src: string;
  earth_date: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function MarsRoverWidget() {
  const [photo, setPhoto] = useState<MarsPhoto | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPhoto = () => {
    setError("");
    setLoading(true);
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=DEMO_KEY")
      .then(res => res.json())
      .then(data => setPhoto(data.latest_photos?.[0]))
      .catch(() => setError("Could not fetch Mars Rover photo."))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <div className="bg-black border border-white/20 rounded-xl p-6 shadow-lg mt-8">
      <h2 className="text-lg font-bold text-white mb-2">Mars Rover Photo</h2>
      {error && (
        <div>
          <p className="text-red-400">{error}</p>
          <button onClick={fetchPhoto} className="mt-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Retry</button>
        </div>
      )}
      {loading && <p className="text-gray-400">Loading...</p>}
      {photo && !error && !loading ? (
        <>
          <Image src={photo.img_src} alt="Mars Rover" width={320} height={128} className="w-full h-32 object-cover rounded mb-2" />
          <p className="text-gray-400 text-xs">{photo.earth_date}</p>
        </>
      ) : null}
    </div>
  );
}
