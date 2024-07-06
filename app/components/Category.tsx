// Category.tsx
"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BookCard from "./BookCard";
import { Category as CategoryType } from "./types";  // Importar el tipo Category

interface CategoryProps {
  books: CategoryType["books"];  // Definir las props usando el tipo Category
}

const Category: React.FC<CategoryProps> = ({ books }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  if (inView) {
    controls.start("visible");
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </motion.div>
  );
};

export default Category;
