import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { debounce } from 'lodash'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])
  const [showDialog, setShowDialog] = useState(true);

  const location = useLocation()


  const navigate = useNavigate()
useEffect(() => {
  const fetchAnime = debounce(async () => {
    if (search.length < 2) return setResult([]);
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=5`);
      const data = await res.json();
      setResult(data.data || []);
    } catch (err) {
      console.error('Error Fetching anime: ', err);
    }
  }, 300)

  fetchAnime();
  return () => fetchAnime.cancel(); 
}, [search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDialog(false)
    }, 3000)

    return () => clearTimeout(timer)
  })
  

  const handleSelection = (anime) => {
    setSearch('')
    setResult([]);
    navigate(`/anime/${anime.mal_id}`)
  }


  return (
  <div className="relative flex w-full max-w-md">
  {showDialog && location.pathname !== '/' && (
  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-yellow-100 text-yellow-900 px-4 py-2 rounded shadow-lg z-[9999] text-sm">
    To go to homepage, click on the <span className="font-semibold">logo</span>.
    <button 
      onClick={() => setShowDialog(false)} 
      className="ml-4 font-bold text-red-500"
    >
      X
    </button>
  </div>
)}

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