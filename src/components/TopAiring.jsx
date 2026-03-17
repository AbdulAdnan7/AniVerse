import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const TopAiring = () => {
   const [topAnime, setTopAnime] = useState([]);
   const [upcomingAnime, setUpcomingAnime] = useState([])

   //Fo Top Airing
   useEffect(() => {
     fetch("https://api.jikan.moe/v4/top/anime")
     .then((res) => res.json())
     .then((data) => {
        setTopAnime(data.data.slice(0,12));
     })
     .catch((err) => console.error('Error fetching anime: ', err))
   }, []);

    //For Top Upcoming
   useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime?filter=upcoming')
    .then((res) => res.json())
    .then((data) => {
        setUpcomingAnime(data.data.slice(0,12))
    })
    .catch((err) => console.error('Failed to Fetch Animes: ', err))
   }, [])

  return (
    <>
    <section id='topAiring' className='mt-10 px-4 min-h-screen'>
        <div>
   <h1 className='text-white text-3xl font-bold'>Top Airing</h1>
   </div>
   {/**For Airing */}
   <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>
     {
        topAnime.map((anime) => (
            <div key={anime.mal_id} className='bg-[#1e1e2f] text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300'>
                <img src={anime.images.jpg.image_url} alt={anime.title} className='w-full h-[200px] object-cover' />
               <div className="p-4 flex flex-col gap-2">
  <h2 className="text-lg font-bold truncate">{anime.title}</h2>
  <p className="text-gray-300 text-sm line-clamp-3">
    {anime.synopsis?.slice(0, 100) || "No description available"}
  </p>
  <div className="flex justify-between items-center mt-auto">
    <span className="text-yellow-400 font-semibold">⭐ {anime.score || "N/A"}</span>
    <Link to={`/anime/${anime.mal_id}`}><a
      href={anime.url}
      target="_blank"
      className="text-sm bg-[#6C5CE7] hover:bg-[#5A4BCF] px-3 py-1 rounded-lg transition"
    >
      Watch
    </a>
    </Link>
  </div>
</div>

            </div>
        ))
     }
   </div>
    </section>
      <section className='mt-10 px-4 min-h-screen'>
        <div>
   <h1 className='text-white text-3xl font-bold'>Upcoming Anime</h1>
   </div>
   {/** For Upcoming */}
   <div id='upcoming' className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>
     {
        upcomingAnime.map((anime) => (
            <div key={anime.mal_id} className='bg-[#1e1e2f] text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300'>
                <img src={anime.images.jpg.image_url} alt={anime.title} className='w-full h-[200px] object-cover' />
               <div className="p-4 flex flex-col gap-2">
  <h2 className="text-lg font-bold truncate">{anime.title}</h2>
  <p className="text-gray-300 text-sm line-clamp-3">
    {anime.synopsis?.slice(0, 100) || "No description available"}
  </p>
  <div className="flex justify-between items-center mt-auto">
    <span className="text-yellow-400 font-semibold">⭐ {anime.score || "N/A"}</span>
   <Link to={`/anime/${anime.mal_id}`}><a
      href={anime.url}
      target="_blank"
      className="text-sm bg-[#6C5CE7] hover:bg-[#5A4BCF] px-3 py-1 rounded-lg transition"
    >
      Watch
    </a></Link>
  </div>
</div>

            </div>
        ))
     }
   </div>
    </section>
    </>
  )
}

export default TopAiring