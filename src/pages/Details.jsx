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
  <div className="text-white min-h-screen px-4">
    {/* Title */}
    <div className="max-w-screen-xl mx-auto mt-10">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center lg:text-left">
        {title}
      </h1>
    </div>

    {/* Anime Details Section */}
    <div className="max-w-screen-xl mx-auto py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
        <img
          src={images?.jpg.large_image_url}
          alt={title}
          className="w-full max-w-xs h-auto object-cover rounded shadow-lg"
        />
        <div className="space-y-3 text-sm sm:text-base">
          <p><strong>Aired:</strong> {aired?.string}</p>
          <p><strong>Rating:</strong> {rating}</p>
          <p><strong>Rank:</strong> {rank}</p>
          <p><strong>Scored by:</strong> {scored_by}</p>
          <p><strong>Popularity:</strong> {popularity}</p>
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Source:</strong> {source}</p>
          <p><strong>Season:</strong> {season}</p>
          <p><strong>Duration of the anime:</strong> {duration}</p>
        </div>
      </div>

      {/* Synopsis */}
      <p className="mt-8 text-gray-300 text-sm md:text-base leading-relaxed text-justify max-w-4xl mx-auto">
        {showMore ? synopsis : synopsis?.slice(0, 450) + '...'}
        <button
          onClick={() => setShowMore(!showMore)}
          className="ml-2 text-cyan-500 font-semibold hover:underline"
        >
          {showMore ? 'Show Less' : 'Read More'}
        </button>
      </p>
    </div>

    {/* Trailer Section */}
    <div className="max-w-screen-xl mx-auto mb-10">
      <p className="text-2xl font-semibold border-b-2 pb-1">Trailer</p>
      {trailer?.embed_url ? (
        <iframe
          src={trailer.embed_url}
          title={title}
          allowFullScreen
          className="w-full max-w-3xl h-[315px] mt-5 mx-auto"
        />
      ) : (
        <p className="text-gray-400 mt-5">Trailer not Found</p>
      )}
    </div>

    {/* Characters Section */}
    <div className="max-w-screen-xl mx-auto mb-10">
      <p className="text-2xl font-semibold border-b-2 pb-1">Characters</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
        {characters.length > 0 ? (
          characters.map((character) => {
            const { role } = character;
            const { images, name, mal_id } = character.character;
            return (
              <div
                key={mal_id}
                className="bg-[#1f2937] rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300"
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
            );
          })
        ) : (
          <p className="text-gray-400 text-sm">Characters Not Found</p>
        )}
      </div>
    </div>
  </div>
);

}

export default Details