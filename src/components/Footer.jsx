import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='bg-[#0f0f1a] text-gray-300 border-t border-[#00ffcc] mt-20'>
      <footer className='max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10'>

        <div>
          <h3 className='text-xl font-bold text-pink-600 mb-4'>ANIVERSE 🌸</h3>
          <p>Your go-to hub for anime updates, trivia, and top picks. Join the community of weebs!</p>
        </div>

        <div>
          <h3 className='text-lg font-semibold text-purple-300 mb-3'>Quick Links</h3>
          <ul className='space-y-2 text-sm'>
            <li><Link to="/" className="hover:text-pink-400">Home</Link></li>
            <li><Link to="/top-airing" className="hover:text-pink-400">Top Airing</Link></li>
            <li><Link to="/upcoming" className="hover:text-pink-400">Upcoming</Link></li>
            <li><Link to="/trivia" className="hover:text-pink-400">Trivia</Link></li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-semibold text-purple-300 mb-3'>Follow Us</h3>
          <ul className='flex gap-4 text-2xl'>
            <li><Link><i className="fab fa-twitter hover:text-pink-400"></i></Link></li>
            <li><Link><i className="fab fa-instagram hover:text-pink-400"></i></Link></li>
            <li><Link><i className="fab fa-discord hover:text-pink-400"></i></Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-purple-300 mb-3">Newsletter</h3>
          <p className="text-sm mb-2">Get the latest anime drops weekly!</p>
          <input
            type="email"
            placeholder="Your email"
            className="p-2 w-full bg-[#1a1a2e] rounded text-white mb-2 focus:outline-none"
          />
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded w-full">
            Subscribe
          </button>
        </div>
      </footer>

      <div className="text-center text-xs text-gray-500 py-4 border-t border-[#2e2e48]">
        © 2025 Aniverse. Made with ❤️ by Weebs for Weebs.
      </div>
    </section>
  )
}

export default Footer
