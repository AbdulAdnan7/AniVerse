import React, { useState, useEffect } from 'react';
import AOT from '../assets/AOT.avif';
import DS from '../assets/Dmon.avif';
import LOM from '../assets/LOM.jpg';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const animeList = [
    {
      title: 'Attack on Titan',
      img: AOT,
      alt: 'Attack on Titan',
      desc: 'Humanity lives within three concentric walls for a century, protected from giant, man-eating beings called Titans.',
      objectPosition: 'object-center'
    },
    {
      title: 'Demon Slayer',
      img: DS,
      alt: 'Demon Slayer',
      desc: 'The story takes place in a world where demons, transformed humans with supernatural abilities, prey on humans.',
      objectPosition: 'object-center'
    },
    {
      title: 'Lord Of Mystries',
      img: LOM,
      alt: 'Lord Of Mystries',
      desc: 'Humans in this world can gain supernatural abilities by consuming Beyonder potions and following specific pathways, becoming "Beyonders".',
      objectPosition: 'object-center'
    }
  ];

  const anime = animeList[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + animeList.length) % animeList.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % animeList.length);
  };

   useEffect(() => {
     const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animeList.length)
     }, 3000)
     return () => clearInterval(interval)
   }, []) 

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
          <p className='font-semibold max-w-lg mt-2'>{anime.desc}</p>
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
