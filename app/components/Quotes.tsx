"use client";

import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const quotes = [
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
];

const QuotesSection: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { text, author } = quotes[currentQuoteIndex];

  return (
    <section className="bg-neutral-950 text-white py-20 flex flex-col items-center">
      <div className="text-center">
        <div className="text-[#93D7DA] text-6xl mb-4">
          <FaQuoteLeft />
        </div>
        <p className="text-2xl md:text-3xl font-semibold mb-4">{text}</p>
        <p className="text-lg md:text-xl text-gray-400">- {author}</p>
      </div>
    </section>
  );
};

export default QuotesSection;
