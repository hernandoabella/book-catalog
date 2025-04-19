// CookBooks.tsx
"use client";

import React from "react";
import Category from "./Category";
import { categories } from "./data";  

const CookBooks: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto w-full pt-32">
      <h1 className="text-2xl md:text-5xl mb-5 font-sans font-bold text-gray-500">Our Book Gallery</h1>
      {categories.map((category, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl md:text-3xl font-sans font-bold border-l-4 pl-4 border-teal-400 dark:text-gray-200">
            {category.title}
          </h2>
          <p className="text-gray-600 p-5">{category.description}</p>
          <Category books={category.books} />
        </div>
      ))}
    </div>
  );
};

export default CookBooks;
