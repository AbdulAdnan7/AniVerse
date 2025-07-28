import React, { useState } from 'react'


const Cards = () => {
  const [isOpen, setIsOpen] = useState(null)

 const Accordian = [
  {
    id: 1,
    question: 'Senpai Says',
    answer: "Senpai notices your curiosity! Don't worry, we've got all the answers you've been quietly wondering about. Just don't blush!"
  },
  {
    id: 2,
    question: 'FAQ no Justu',
    answer: "Using forbidden FAQ techniques to deliver clarity! These answers are so sharp, even Kakashi would approve."
  },
  {
    id: 3,
    question: 'Scroll of Knowledge',
    answer: "Ancient secrets sealed in this scroll… Just kidding. It’s your go-to guide for all things Aniverse—unroll it, and unlock the info!"
  },
  {
    id: 4,
    question: 'The Otaku Oracle',
    answer: "Ask, and ye shall receive… anime wisdom from the oracle of weebdom. All prophecies come with subtitles."
  },
  {
    id: 5,
    question: 'EncycloNek',
    answer: "Your kawaii little guide to the anime universe! Filled with purr-fectly curated facts and answers. Nyaa~ 🐾"
  }
]

   const toggle = (id) => {
    setIsOpen(prev => (prev === id ? null : id ))
   }

  return (
   <>
   <section>
    <div className='bg-white w-[80vh] h-12'>
      <div className="bg-[#0f0f1c] text-white border-l-4 border-[#ff4ecd] px-2 pt-2 p-2 rounded-md shadow-lg font-[cursive]">
  <h2 className="text-xl text-[#ffb3ec] mb-2">FAQ no Justu</h2>
  <p className="italic text-[#ccccff]">Master the ancient secrets of otaku knowledge...</p>
</div>
      <div>
       {
        Accordian.map(({id, question, answer}) => (
          <div
          key={id}
          className='mt-4 bg-[#0f0f1c] p-2 text-white shadow-md'>
            <button
            onClick={() => toggle(id)}
            className='text-1xl font-semibold'
            >{question}</button>
            { isOpen === id && ( <p className=' text-[#f5c2e7] italic font-[cursive]'>{answer}</p> )
}
          </div>
        ))
       }
      </div>
    </div>
   </section>
   </>
  )
}

export default Cards
