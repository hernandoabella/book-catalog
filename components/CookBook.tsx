import React from 'react';

const CookBook = () => {
  const books = [
    { title: 'SQL Cook Book', link: 'https://www.amazon.com/-/es/Hernando-Abella/dp/B0CWVK8B9R' },
    { title: 'JavaScript Cook Book', link: 'https://www.amazon.com/Hernando-Abella/dp/B0CPDSXDGL' },
    { title: 'Typescript cookbook', link: '' },
    { title: 'Python cookbook', link: '' }
  ];

  return (
    <div>
      <h2>CookBook</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}><a href={book.link} target="_blank" rel="noopener noreferrer">{book.title}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default CookBook;
