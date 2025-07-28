import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='bg-[#0f0f1c] shadow-md px-4 py-4 flex justify-between'>
      <header className='font-bold px-1 py-1'>
       <h1 className='text-white'>ANI<span className='text-yellow-400'>VERSE.</span></h1>
      </header>
      <div className="flex items-center gap-2">
  <input
    type="text"
    placeholder="Search anime..."
    className="px-3 py-1.5 rounded-md bg-[#1a1a2e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
  />
  <button className="px-3 py-1.5 bg-pink-500 hover:bg-pink-600 text-white rounded-md transition-all">
    Search
  </button>
</div>

    </nav>
    </>
  )
}

export default Navbar