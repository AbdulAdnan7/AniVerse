import React from 'react'
import AOT from '../assets/AOT.avif'

const HeroSection = () => {
    const animeList = [
        {
            title: "Attack on Titan",
            img: AOT,
            alt: 'Attack on Titan',
            desc: 'Humanity lives within three concentric walls for a century, protected from giant, man-eating beings called Titans. '
        }
    ]
  return (
    <div>
      {
        animeList.map((anime, index) => (
            <div className='relative w-full h-[50vh]'>
            <img 
            className='w-full h-full object-cover'
            src={anime.img}
             alt={anime.alt} />
             <div className='absolute inset-0 sm:mt-60 sm:px-4 lg:mt-60'>
                 <h1 className='text-5xl text-white font-semibold'>{anime.title}</h1>
                 <p className='text-white font-semibold'>{anime.desc}</p>
                 <div className='mt-4 flex gap-4'>
                 <button className='bg-[#6C5CE7] hover:bg-[#5A4BCF] text-white p-2 px-4 rounded'>Watch now</button>
                <button className="bg-transparent border text-white border-white  px-4 py-2 rounded hover:bg-white hover:text-black transition">Detail</button>
                 </div>
             </div>
            </div>
        ))
      }
    </div>
  )
}

export default HeroSection

