import React from 'react';

const PatternPrograms = () => {
  const books = [
    { title: '150+ JavaScript Pattern Programs', link: 'https://www.amazon.com/150-JavaScript-Pattern-Programs-creativity/dp/B0CV1GBW28' },
    { title: '150+ C Pattern Programs', link: 'https://www.amazon.com/150-Pattern-Programs-creativity-statements/dp/B0CTZW4Y9V' },
    { title: '150 Python Pattern Programs', link: 'https://www.amazon.com/Hernando-Abella-ebook/dp/B0CVNG3PRV' }
  ];

  return (
    <div>
      <h2>Pattern Programs</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}><a href={book.link} target="_blank" rel="noopener noreferrer">{book.title}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default PatternPrograms;
