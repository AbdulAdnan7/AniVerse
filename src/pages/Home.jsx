import React from 'react'
import AOT from '../assets/AOT.avif'
import HoverExpand from '../components/ui/hover-expand'



const Home = () => {
   


  const HeroSection = [
    {
      name: 'Attack On Titan',
      image: AOT
    }
  ]

return (
  <>
  <section className="px-4 py-8">
  {
    HeroSection.map((anime, index) => (
      <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Text block */}
        <div className="w-full lg:w-[450px] p-6">
          <h2 className="text-3xl font-bold text-white">{anime.name}</h2>
          <p className="mt-2 text-gray-300">
            Humanity vs Titans. A dark, gripping anime with unmatched intensity.
          </p>
        </div>

        {/* Image */}
        <img
          src={anime.image}
          alt={anime.name}
          className="w-full lg:w-[650px] h-[350px] object-cover rounded-lg shadow-lg"
        />
      </div>
    ))
  }
</section>

  </>
)

}
export default Home
