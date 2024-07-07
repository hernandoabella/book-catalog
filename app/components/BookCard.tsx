// BookCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { FaAmazon } from "react-icons/fa";
import { SiGumroad } from "react-icons/si";
import { motion } from "framer-motion";
import { Book } from "./types";  // Importar el tipo Book

interface BookCardProps {
  book: Book;  // Definir las props usando el tipo Book
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const bookVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="group overflow-hidden relative"
      variants={bookVariants}
    >
      <div className="relative w-full h-96 rounded-xl">
        <Image
          src={book.image}
          alt={book.title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full transition-all duration-300"
        />
      </div>
      <div className="p-4 bg-neutral-950 flex justify-center space-x-4">
        {book.link && (
          <a
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-rose-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600"
          >
            <FaAmazon className="mr-2" />
            Amazon
          </a>
        )}
        {book.gumroad && (
          <a
            href={book.gumroad}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-rose-600"
          >
            <SiGumroad className="mr-2" />
            Gumroad
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default BookCard;
