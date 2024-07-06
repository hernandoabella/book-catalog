"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { FaAmazon } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { SiGumroad } from "react-icons/si";

const AdvancedDesignPatterns = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const books = [
    {
      title: "",
      link: "https://www.amazon.com/-/es/Hernando-Abella/dp/B0CNWGV8W5",
      image: "/js-design-pattern.jpg",
      description:
        "",
    },
  
  ];

  const bookVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const containerControls = useAnimation();

  if (inView) {
    containerControls.start("visible");
  }

  return (
    <div className="max-w-5xl mx-auto w-full p-10">
      <h2 className="text-2xl md:text-3xl mb-10 font-sans font-bold border-l-4 pl-4 border-teal-400 dark:text-gray-200">
        Advanced Design Patterns
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={containerControls}
      >
        {books.map((book, index) => (
          <motion.div
            key={index}
            className="group overflow-hidden"
            variants={bookVariants}
          >
            <div className="relative w-full h-96">
              <Image
                src={book.image}
                alt={book.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full transition-all duration-300 rounded-xl"
              />
            </div>
            <div className="bg-white flex">
              {book.link && (
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-rose-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600"
                >
                  <FaAmazon className="mr-2" />
                  Get it now
                </a>
              )}
            </div>
            <div className="p-4 bg-white">
              {book.link && (
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-rose-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600"
                >
                  <SiGumroad className="mr-2" />
                  Get it now
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AdvancedDesignPatterns;
