"use client";

import React from "react";
import Category from "./Category";
import { Category as CategoryType } from "./types";

const CookBooks: React.FC = () => {
  const categories: CategoryType[] = [
    {
      title: "Cook Books",
      books: [
        {
          title: "SQL Cook Book",
          link: "https://www.amazon.com/-/es/Hernando-Abella/dp/B0CWVK8B9R",
          gumroad: "https://gumroad.com/l/sql-cookbook",
          image: "/sql-cookbook.jpg",
        },
        {
          title: "JavaScript Cook Book",
          link: "https://www.amazon.com/Hernando-Abella/dp/B0CPDSXDGL",
          gumroad: "https://gumroad.com/l/js-cookbook",
          image: "/js-cookbook.jpg",
        },
        {
          title: "Python Cook Book",
          link: "https://www.amazon.com/Hernando-Abella/dp/B0CPDSXDGL",
          gumroad: "https://gumroad.com/l/python-cookbook",
          image: "/python-cookbook.png",
        },
      ],
    },
    {
      title: "250+ Killer One-Liners",
      books: [
        {
          title: "250+ Killer JavaScript One-Liners",
          link: "https://www.amazon.com/-/es/Hernando-Abella/dp/B0CN58RHGF",
          gumroad: "https://gumroad.com/l/python-cookbook",
          image: "/250-killer-js.jpg",
        },
        {
          title: "250+ Killer TypeScript One-Liners",
          link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CYHZ5QKJ",
          gumroad: "https://gumroad.com/l/python-cookbook",
          image: "/250-killer-ts.jpg",
        },
        {
          title: "250+ Killer C# One-Liners",
          link: "https://www.amazon.com/-/es/Hernando-Abella/dp/B0D31DMBFY",
          gumroad: "https://gumroad.com/l/python-cookbook",
          image: "/250-killer-csharp.jpg",
        },
        {
          title: "250+ Killer Ruby One-Liners",
          link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CXF57XT9",
          gumroad: "https://gumroad.com/l/python-cookbook",
          image: "/250-killer-ruby.jpg",
        },
      ],
    },
    {
      title: "Data Structures and Algorithms",
      books: [
        {
          title: "Python Cook Book",
          link: "https://www.amazon.com/Hernando-Abella/dp/B0CPDSXDGL",
          gumroad: "https://gumroad.com/l/python-cookbook",
          image: "/python-cookbook.png",
        },
        
      ],
    },
  ];

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
