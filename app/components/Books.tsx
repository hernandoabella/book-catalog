// CookBooks.tsx
"use client";

import React from "react";
import Category from "./Category";
import { categories } from "./data";  

const CookBooks: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto w-full p-10">
      {categories.map((category, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl md:text-3xl mb-5 font-sans font-bold border-l-4 pl-4 border-teal-400 dark:text-gray-200">
            {category.title}
          </h2>
          <Category books={category.books} />
        </div>
      ))}
    </div>
  );
};

export default CookBooks;
