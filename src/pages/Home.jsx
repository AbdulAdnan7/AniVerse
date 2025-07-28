import React from 'react'
import AOT from '../assets/AOT.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import HeroSection from '@/components/HeroSection'
import TopAiring from '@/components/TopAiring'
import WhySection from '@/components/WhySection'
import Footer from '@/components/Footer'


const Home = () => {
   

  return (
   <section>
    <HeroSection />
    <TopAiring />
    <WhySection />
    <Footer />
   </section>
  )
}

export default Home