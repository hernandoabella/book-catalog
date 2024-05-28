"use client"

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { FaAmazon } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const CookBook = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const books = [
    {
      title: "SQL Cook Book",
      link: "https://www.amazon.com/-/es/Hernando-Abella/dp/B0CWVK8B9R",
      image: "/sql-cookbook.jpg",
      description:
        "Discover a collection of SQL recipes to solve common problems in relational databases.",
    },
    {
      title: "JavaScript Cook Book",
      link: "https://www.amazon.com/Hernando-Abella/dp/B0CPDSXDGL",
      image: "/js-cookbook.jpg",
      description:
        "Explore a variety of JavaScript recipes covering everything from basics to advanced techniques.",
    },
    {
      title: "Python Cook Book",
      link: "#",
      image: "/python-cookbook.png",
      description:
        "Dive into a set of Python recipes to efficiently solve programming problems.",
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
        Cook Books
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
            <div className="relative w-full h-96 bg-teal-500 group-hover:bg-teal-700 transition-all duration-300">
              <Image
                src={book.image}
                alt={book.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full transition-all duration-300"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-black text-xl font-bold mb-2">
                {book.title}
              </h3>
              <p className="text-gray-700 mb-2">{book.description}</p>
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CookBook;
