import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Optional icons

// Reusable Accordion Item
const AccordionItem = ({ id, question, answer, isOpen, onToggle }) => {
  return (
    <div className="bg-[#0f0f1c] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden mb-4 border border-gray-800 hover:border-[#6C5CE7]/30">
      <button
        onClick={() => onToggle(id)}
        className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/50"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-white flex items-center gap-3">
          <span className="text-[#6C5CE7]">Q:</span>
          {question}
        </span>
        <span className="text-[#6C5CE7] transition-transform duration-300">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>

      {/* Answer with smooth animation */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4 text-gray-300 italic border-t border-gray-800 pt-3">
          <span className="text-[#f5c2e7] font-[cursive]">{answer}</span>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  const [isOpen, setIsOpen] = useState(null);

  const accordionData = [
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
    setIsOpen((prev) => (prev === id ? null : id));
  };

  return (
    <section className="px-4 sm:px-8 md:px-12 py-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0f0f1c] to-[#1a1a2e] text-white rounded-xl p-6 mb-8 border-l-4 border-[#6C5CE7] shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#6C5CE7] mb-2 flex items-center gap-2">
            <span className="text-3xl">📜</span> FAQ no Justu
          </h2>
          <p className="text-gray-300 italic">
            Master the ancient secrets of otaku knowledge...
          </p>
        </div>

        {/* Accordion Items */}
        <div>
          {accordionData.map((item) => (
            <AccordionItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={isOpen === item.id}
              onToggle={toggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;