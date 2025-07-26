import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='bg-[#0f0f1c] shadow-md px-4 py-4 flex justify-between'>
      <header className='font-bold px-1 py-1'>
       <h1 className='text-white'>ANI<span className='text-yellow-400'>VERSE.</span></h1>
      </header>
      <section className='space-x-2 hidden lg:block'>
        <NavLink>
          Home
        </NavLink>
         <NavLink>
          Trending
        </NavLink>
         <NavLink>
          Genres
        </NavLink>
         <NavLink>
          Top Reated
        </NavLink>
      </section>
    </nav>
    </>
  )
}

export default Navbar