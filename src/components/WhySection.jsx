import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Cards from './Cards'
import quotes from './quotes.json'

const WhySection = () => {
    const [fact, setFact] = useState(null);

    const fetchTrivia = async () => {
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      setFact(random)
    }

    useEffect(() => {
   fetchTrivia()

}, [] )


  return (
   <>
   <section className='min-h-screen'>
     <main className='mt-20'>
     <h1 className='text-center text-4xl text-white font-bold'>"Aniverse Q&A: Weeb Edition 👘"</h1>
     <div className='w-full h-full p-20 mt-4'>
      <Cards />
     </div>
     </main>
     <main>
         <div className="bg-[#1a1a2e] text-white p-6 rounded-xl max-w-xl mx-auto mt-10 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-pink-400">🎌 Anime Trivia</h2>
      {fact ? (
        <p className="italic text-lg">
          “{fact.quote}” — <span className="text-purple-300">{fact.character}</span> from <span className="text-blue-300">{fact.anime}</span>
        </p>
      ) : (
        <p>Loading trivia...</p>
      )}

      {/* Optional: Refresh Button */}
      <button
        onClick={fetchTrivia}
        className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
      >
        New Trivia
      </button>
    </div>
     </main>
   </section>
   </>
  )
}

export default WhySection