import React from 'react';
import Image from 'next/image';

const CookBook = () => {
  const books = [
    {
      title: "SQL Cook Book",
      link: "https://www.amazon.com/-/es/Hernando-Abella/dp/B0CWVK8B9R",
      image: "/images/sql_cookbook.jpg",
      description: "Discover a collection of SQL recipes to solve common problems in relational databases."
    },
    {
      title: "JavaScript Cook Book",
      link: "https://www.amazon.com/Hernando-Abella/dp/B0CPDSXDGL",
      image: "/images/js_cookbook.jpg",
      description: "Explore a variety of JavaScript recipes covering everything from basics to advanced techniques."
    },
    {
      title: "Typescript cookbook",
      link: "",
      image: "/images/ts_cookbook.jpg",
      description: "Find practical solutions and best practices for writing robust and scalable TypeScript applications."
    },
    {
      title: "Python cookbook",
      link: "",
      image: "/images/python_cookbook.jpg",
      description: "Dive into a set of Python recipes to efficiently solve programming problems."
    }
  ];

  return (
    <div className="p-5">
      <h2 className="text-2xl md:text-3xl mb-5 font-sans font-bold border-l-4 pl-4 border-teal-400 dark:text-gray-200">
        Cook Book
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <Image 
              src={book.image} 
              alt={book.title} 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{book.title}</h3>
              <p className="text-gray-700 mb-2">{book.description}</p>
              {book.link && (
                <a 
                  href={book.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600"
                >
                  Get it
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CookBook;
