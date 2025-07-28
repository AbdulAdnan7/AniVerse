import React, { useState } from 'react'


const Cards = () => {
  const [isOpen, setIsOpen] = useState(null)

 const Accordian = [
  {
    id: 1,
    question: "Senpai Says",
    answer: "Senpai noticed your burning questions! Stay calm, kouhai—we’ve got the answers you secretly hoped someone would explain (without making it awkward)."
  },
  {
    id: 2,
    question: "FAQ no Justu",
    answer: "Summoning forbidden scrolls of clarity! These FAQs have been passed down through shinobi generations... okay maybe just a dev or two, but still—believe it!"
  },
  {
    id: 3,
    question: "Scroll of Knowledge",
    answer: "This ancient scroll contains answers mortals seek! Unseal it carefully and prepare for wisdom... or at least really helpful info about the site."
  },
  {
    id: 4,
    question: "The Otaku Oracle",
    answer: "You’ve consulted the Oracle—good choice! All anime truths shall be revealed... and yes, your waifu still ranks top tier."
  },
  {
    id: 5,
    question: "EncycloNek",
    answer: "Nyaa~ Welcome to the ultimate neko-approved guide! Packed with cute facts and handy tips. Warning: may cause spontaneous head tilts and sparkles ✨🐾"
  }
];

   const toggle = (id) => {
    setIsOpen(prev => (prev === id ? null : id ))
   }

  return (
   <>
   <section className="px-4 sm:px-6 md:px-8 py-6">
    <div className=' max-w-xl mx-auto'>
      <div className="bg-[#0f0f1c] text-white border-l-4 border-[#ff4ecd] px-2 pt-2 p-2 shadow-lg font-[cursive]">
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
