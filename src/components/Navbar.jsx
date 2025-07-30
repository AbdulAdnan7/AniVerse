import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <nav className="bg-[#0f0f1c] shadow-md px-4 py-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <header className="font-bold">
          <Link to="/">
            <h1 className="text-white text-2xl sm:text-3xl">
              ANI<span className="text-yellow-400">VERSE.</span>
            </h1>
          </Link>
        </header>

        <div className="w-full sm:w-auto">
          <SearchBar />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
