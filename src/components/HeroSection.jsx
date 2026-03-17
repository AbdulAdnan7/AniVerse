import React, { useState, useEffect } from 'react';
import AOT from '../assets/AOT.avif';
import DS from '../assets/Dmon.avif';
import LOM from '../assets/LOM.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animeList, setAnimeList] = useState([])

  
  //For Slides and Buttons To Change Index
  const anime = animeList[currentIndex];

  useEffect(() => {
    //Fetching the api
    const fetchTopAnime = async () => {
      //Fetching with TRY block
      try {
        const res = await fetch('https://api.jikan.moe/v4/top/anime?limit=10');
        const data = await res.json();
        const topAnime = data.data.map((anime) => ({
          mal_id: anime.mal_id,
          title: anime.title,
          img: anime.images?.jpg?.large_image_url || fallbackImage,
          alt: anime.title,
          desc: anime.synopsis,
          objectPosition: 'object-center'
        }))
        setAnimeList(topAnime)
      } catch (err) {
        console.log('Failed to fetch top anime: ', err)
      }
    }
    console.log(fetchTopAnime())
    fetchTopAnime()
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + animeList.length) % animeList.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % animeList.length);
  };

    //For Automatic slide Changing
   useEffect(() => {
     const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animeList.length)
     }, 4000)
     return () => clearInterval(interval)
   }, [animeList]);
   
   if (animeList.length === 0) return <div className='text-white p-10'>Loading....</div>

  return (
    <div id='home'>
      <div className='relative w-full h-[50vh] overflow-hidden'>
       <img
  src={anime.img}
  alt={anime.alt}
  className="w-full h-full object-cover object-center"
  loading="lazy"
/>


        <div className='absolute bottom-4 left-4 sm:left-8 pr-12 text-white z-10'>
          <h1 className=' text-2xl md:text-5xl font-semibold'>{anime.title}</h1>
          <p className='font-semibold max-w-lg sm:text-lg mt-2 line-clamp-2'>{anime.desc}</p>
          <div className='mt-4 flex gap-4'>
           <Link to={`/anime/${anime.mal_id}`}><button className='bg-[#6C5CE7] hover:bg-[#5A4BCF] text-white p-2 px-4 rounded'>Watch now</button></Link>
           <Link to={`/anime/${anime.mal_id}`}><button className='bg-transparent border text-white border-white px-4 py-2 rounded hover:bg-white hover:text-black transition'>Detail</button></Link>
          </div>
        </div>

        <div className='absolute hidden bottom-4 right-4 md:flex gap-4 z-20'>
          <button onClick={prevSlide} className='bg-[#6C5CE7] text-white p-2 rounded'>
            prev
          </button>
          <button onClick={nextSlide} className='bg-[#6C5CE7] text-white p-2 rounded'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
