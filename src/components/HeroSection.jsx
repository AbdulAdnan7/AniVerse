import React, { useState, useEffect } from 'react';
import AOT from '../assets/AOT.avif';
import DS from '../assets/Dmon.avif';
import LOM from '../assets/LOM.jpg';

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
          title: anime.title,
          img: anime.images.jpg.large_image_url,
          alt: anime.title,
          desc: anime.synopsis,
          objectPosition: 'object-center'
        }))
        setAnimeList(topAnime)
      } catch (err) {
        console.log('Failed to fetch top anime: ', err)
      }
    }
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
    <div>
      <div className='relative w-full h-[50vh] overflow-hidden'>
        <img
          className={`absolute inset-0 w-full h-full object-cover z-0 ${anime.objectPosition}`}
          src={anime.img}
          alt={anime.alt}
        />

        <div className='absolute bottom-4 left-4 sm:left-8 pr-12 text-white z-10'>
          <h1 className='text-5xl font-semibold'>{anime.title}</h1>
          <p className='font-semibold max-w-lg mt-2 truncate'>{anime.desc}</p>
          <div className='mt-4 flex gap-4'>
            <button className='bg-[#6C5CE7] hover:bg-[#5A4BCF] text-white p-2 px-4 rounded'>Watch now</button>
            <button className='bg-transparent border text-white border-white px-4 py-2 rounded hover:bg-white hover:text-black transition'>Detail</button>
          </div>
        </div>

        <div className='absolute bottom-4 right-4 flex gap-4 z-20'>
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
