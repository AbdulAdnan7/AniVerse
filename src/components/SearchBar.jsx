import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchAnime = async () => {
      if(search.length < 2) return setResult([]);

      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=5`)
        const data = await res.json();
        setResult(data.data || [])
      } catch (err) {
        console.error('Error Fetching anime: ', err)
      }
    }

    fetchAnime()
  }, [search])

  const handleSelection = (anime) => {
    setSearch(anime.title)
    setResult([]);
    navigate(`/anime/${anime.mal_id}`)
  }


  return (
  <div className="relative w-full max-w-md mx-auto">
 <input
  type="text"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search anime..."
  className="w-full px-3 py-2 rounded-md bg-[#1a1a2e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
/>
  {result.length > 0 && (
    <ul className="absolute mt-1 w-full bg-[#1a1a2e] text-white rounded shadow-lg z-50 max-h-60 overflow-y-auto divide-y divide-gray-700">
          {result.map((anime) => (
           <li
  key={anime.mal_id}
  onClick={() => handleSelection(anime)}
  className="px-4 py-2 hover:bg-pink-600 cursor-pointer transition-all text-sm"
>

              {anime.title}
            </li>
          ))}
        </ul>
      )}
</div>
  )
}

export default SearchBar