import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
   const {id} = useParams()
   
   const [anime, setAnime] = React.useState({})
   const [characters, setCharacters] = React.useState([])
   const [showMore, setShowMore] = React.useState(false);

   const { title, synopsis, trailer, duration, aired, season, images, rank, score, scored_by, popularity, status, rating, source} = anime;

   useEffect(() => {

   const fetchAnimes = async () => {
    try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const data = await res.json()
    setAnime(data.data)
    console.log(data); 
    } catch (err) {
      console.error(err)
    }
   }

   if(id) {
    fetchAnimes();
   }
   }, [id])

  return (
    <div className='text-white min-h-screen'>
      <div className="title">
        {title}
      </div>
      <div className="details ">
        <div className="detail flex justify-evenly">
          <img src={images?.jpg.large_image_url} alt={title} />
          <div className="animedetails">
            <p><span>Aired:</span><span>{aired?.string}</span></p>
            <p><span>Rating:</span><span>{rating}</span></p>
            <p><span>Rank:</span><span>{rank}</span></p>
            <p><span>Scored by:</span>{scored_by}<span></span></p>
            <p><span>Popularity;</span><span>{popularity}</span></p>
            <p><span>Status:</span><span>{status}</span></p>
            <p><span>Source:</span><span>{source}</span></p>
            <p><span>Season</span><span>{season}</span></p>
            <p><span>Duration:</span><span>{duration}</span></p>
          </div>
        </div>
        <p>{ showMore ? synopsis : synopsis?.slice(0, 450)  }</p>
        <button 
        onClick={() => setShowMore(!showMore)}
        className='text-cyan-700 font-bold'
        >{showMore ? 'Show Less' : 'Read More'}</button>
      </div>
      <div className="trailer">
        <p>Trailer</p>
        {
          trailer?.embed_url && (
            <iframe  
            src={trailer?.embed_url}
            />
          )
        }
      </div>
    </div>
  )
}

export default Details