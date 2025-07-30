import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Cards from './Accoedian'
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
   {/** For Acc */}
   <section className='min-h-screen'>
     <main className='mt-12'>
     <h1 className='text-center text-4xl text-white font-bold'>"Aniverse Q&A: Weeb Edition 👘"</h1>
     <div className='w-full h-full p-20'>
      <Cards />
     </div>
     </main>
     {/** For Random Quotes aka Trivia */}
     <main>
         <div className="bg-[#0f0f1a] text-white p-6 rounded-xl max-w-xl mx-auto mt-2 shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">🎌 Anime Trivia</h2>
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
        className="mt-4 px-4 py-2 bg-[#6C5CE7] text-white rounded hover:bg-[#a29bfe]"
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