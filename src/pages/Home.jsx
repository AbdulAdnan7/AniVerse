import React from 'react'
import AOT from '../assets/AOT.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import HeroSection from '@/components/HeroSection'

const Home = () => {
  return (
   <section>
    <HeroSection />
   </section>
  )
  {
    /**
     * <div className='absolute inset-0 left-[400px] right-20 top-58'>
  <div className='flex gap-4'>
    <button className='bg-gra p-2 rounded-full'>
      <FontAwesomeIcon icon={faAngleLeft} />
    </button>
    <button className='bg-gray-400 p-2 rounded-full'>
      <FontAwesomeIcon icon={faAngleRight} />
    </button>
  </div>
</div>

     */
  }
}

export default Home