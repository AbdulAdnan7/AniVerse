import React from 'react'
import Cards from './Cards'

const WhySection = () => {
  return (
   <>
   <section className='min-h-screen'>
     <main className='mt-20'>
     <h1 className='text-center text-4xl text-white font-bold'>What is ANIVERSE?</h1>
     <div className='w-full h-full p-20 mt-4'>
      <Cards />
     </div>
     </main>
   </section>
   </>
  )
}

export default WhySection