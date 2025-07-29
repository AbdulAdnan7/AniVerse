import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Details = () => {
   const {id} = useParams()
   
   const [anime, setAnime] = React.useState({})
   const [characters, setCharacters] = React.useState([])
   const [showMore, setShowMore] = React.useState(false);

   const { title, synopsis, trailer, duration, aired, season, images, rank, score, scored_by, popularity, status, rating, source} = anime;  

   //For Anime
   useEffect(() => {

   const fetchAnimes = async () => {
    try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const data = await res.json()
    setAnime(data.data)
    } catch (err) {
      console.error(err)
    }
   }

   //For Characters
   const fetchCharacters = async () => {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
      const data = await res.json();
      setCharacters(data.data)
      console.log(data.data)
    } catch (err) {
      console.error(`Failed to Fetch: `, err)
    }
   }

   if(id) {
    fetchAnimes();
    fetchCharacters()
   }
   }, [id])

  return (
    <div className='text-white min-h-screen'>
      <div className="title mx-20 mt-10">
        <h1 className='text-3xl lg:ml-60 font-semibold'>{title}</h1>
      </div>
      <div className="details py-10">
        <div className="detail flex justify-evenly">
          <img src={images?.jpg.large_image_url} alt={title}
          className=''
          />
          <div className="animedetails space-y-4 text-1xl">
            <p className='flex gap-x-2'><strong>Aired:</strong><span>{aired?.string}</span></p>
            <p className='flex gap-x-2'><strong>Rating:</strong><span>{rating}</span></p>
            <p className='flex gap-x-2'><strong>Rank:</strong><span>{rank}</span></p>
            <p className='flex gap-x-2'><strong>Scored by:</strong>{scored_by}<span></span></p>
            <p className='flex gap-x-2' ><strong>Popularity:</strong><span>{popularity}</span></p>
            <p className='flex gap-x-2'><strong>Status:</strong><span>{status}</span></p>
            <p className='flex gap-x-2'><strong>Source:</strong><span>{source}</span></p>
            <p className='flex gap-x-2'><strong>Season</strong><span>{season}</span></p>
            <p className='flex gap-x-2'><strong>Duration:</strong><span>{duration}</span></p>
          </div>
        </div>
       <p className={`ml-70 mt-20 text-gray-300 text-sm leading-relaxed text-justify px-6 max-w-4xl`}>
  {showMore ? synopsis : synopsis?.slice(0, 450) + '...'}
        <button 
        onClick={() => setShowMore(!showMore)}
        className='text-cyan-700 font-bold'
        >{showMore ? 'Show Less' : 'Read More'}</button>
        </p>
      </div>
      <div className="trailer">
        <p className='text-3xl ml-20 lg:ml-22 border-b-2 w-20'>Trailer</p>
        {
          trailer?.embed_url && (
           <iframe  
  src={trailer?.embed_url}
  title={title}
  allowFullScreen
  className="w-full max-w-3xl h-[315px] mt-5 mx-auto"
/>

          )
        }
      </div>
      <div className='md:ml-20'>
      <p className='text-3xl flex border-b-2 w-36 space-y-1.5 '> Characters</p>
      <div className="characters grid sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-6 py-6">
        {
           characters.map((character, index) => {
            const {role} = character
            const {images, name, mal_id} = character.character
          return <div
  key={mal_id}
  className="w-[160px] bg-[#1f2937] rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300 mb-4"
>
  <img
    src={images.jpg.image_url}
    alt={name}
    className="w-full h-[220px] object-cover"
  />
  <div className="p-3 text-center">
    <h4 className="text-white text-sm font-semibold truncate">{name}</h4>
    <p className="text-gray-400 text-xs mt-1">{role}</p>
  </div>
</div>

           })
        }
      </div>
      </div>
    </div>
  )
}

export default Details