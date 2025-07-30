import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import SearchBar from './SearchBar'


const Navbar = () => {
  return (
    <>
    <nav className='bg-[#0f0f1c] shadow-md px-4 py-4 flex justify-between'>
      <header className='font-bold px-1 py-1'>
        <Link to='/'>
       <h1 className='text-white'>ANI<span className='text-yellow-400'>VERSE.</span></h1></Link>
      </header>
      <SearchBar />

    </nav>
    </>
  )
}

export default Navbar