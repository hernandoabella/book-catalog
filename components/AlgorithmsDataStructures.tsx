import React from 'react';

const AlgorithmsDataStructures = () => {
  const books = [
    { title: 'Algorithms and Data Structures in Python', link: 'https://www.amazon.com/-/es/Hernando-Abella/dp/B0CW65JBLW' }
  ];

  return (
    <div>
      <h2>Algorithms and Data Structures</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}><a href={book.link} target="_blank" rel="noopener noreferrer">{book.title}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default AlgorithmsDataStructures;
