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
    <div>Details</div>
  )
}

export default Details