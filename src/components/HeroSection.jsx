import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const FALLBACK_IMG = 'https://via.placeholder.com/400x600?text=No+Image';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animeList, setAnimeList] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchTopAnime = async () => {
      try {
        const res = await fetch('https://api.jikan.moe/v4/top/anime?limit=10');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const topAnime = data.data.map((item) => ({
          mal_id: item.mal_id,
          title: item.title,
          img: item.images?.webp?.large_image_url
            || item.images?.jpg?.large_image_url
            || FALLBACK_IMG,
          desc: item.synopsis || 'No description available.',
        }));
        setAnimeList(topAnime);
      } catch (err) {
        console.error('Failed to fetch top anime:', err);
      }
    };
    fetchTopAnime(); // ✅ called once, not twice
  }, []);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % animeList.length);
    }, 4000);
  };

  // ✅ Restart interval whenever animeList loads or changes
  useEffect(() => {
    if (animeList.length === 0) return;
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [animeList]);

  const goTo = (index) => {
    setCurrentIndex((index + animeList.length) % animeList.length);
    startInterval(); // ✅ reset timer on manual nav
  };

  if (animeList.length === 0) {
    return (
      <div className="w-full h-[50vh] bg-gray-900 flex items-center justify-center text-white text-lg">
        Loading...
      </div>
    );
  }

  const anime = animeList[currentIndex];

  return (
    <div id="home">
      <div className="relative w-full h-[50vh] overflow-hidden">

        {/* Images — cross-fade via opacity */}
        {animeList.map((item, i) => (
          <img
            key={item.mal_id}
            src={item.img}
            alt={item.title}
            loading={i === 0 ? 'eager' : 'lazy'} // ✅ eager for first, lazy for rest
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          />
        ))}

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10" />

        {/* Dot indicators */}
        <div className="absolute top-3 right-4 flex gap-1.5 z-20">
          {animeList.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
                }`}
            />
          ))}
        </div>

        {/* Text content */}
        <div className="absolute bottom-6 left-5 z-20 max-w-md text-white pr-12">
          <h1 className="text-2xl md:text-4xl font-semibold leading-tight">{anime.title}</h1>
          <p className="text-sm md:text-base mt-2 text-white/75 line-clamp-2">{anime.desc}</p>
          <div className="mt-4 flex gap-3">
            <Link to={`/anime/${anime.mal_id}`}>
              <button className="bg-[#6C5CE7] hover:bg-[#5A4BCF] text-white px-4 py-2 rounded text-sm transition">
                Watch now
              </button>
            </Link>
            <Link to={`/anime/${anime.mal_id}`}>
              <button className="bg-transparent border border-white/60 text-white px-4 py-2 rounded text-sm hover:bg-white hover:text-black transition">
                Details
              </button>
            </Link>
          </div>
        </div>

        {/* Prev / Next arrows */}
        <div className="absolute bottom-6 right-4 flex gap-2 z-20">
          <button
            onClick={() => goTo(currentIndex - 1)}
            aria-label="Previous"
            className="bg-[#6C5CE7]/80 hover:bg-[#6C5CE7] text-white w-8 h-8 rounded flex items-center justify-center transition"
          >
            ‹
          </button>
          <button
            onClick={() => goTo(currentIndex + 1)}
            aria-label="Next"
            className="bg-[#6C5CE7]/80 hover:bg-[#6C5CE7] text-white w-8 h-8 rounded flex items-center justify-center transition"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;