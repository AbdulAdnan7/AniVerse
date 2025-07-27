import React from 'react'
import AOT from '../assets/AOT.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import HeroSection from '@/components/HeroSection'
import TopAiring from '@/components/TopAiring'

const Home = () => {
  return (
   <section>
    <HeroSection />
    <TopAiring />
   </section>
  )
}

export default Home