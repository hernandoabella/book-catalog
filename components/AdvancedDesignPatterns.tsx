import React from 'react';

const AdvancedDesignPatterns = () => {
  const books = [
    { title: 'Advanced Design Patterns in JavaScript', link: 'https://www.amazon.com/Design-Patterns-JavaScript-Optimizing-applications/dp/B0CNWGV8W5' }
  ];

  return (
    <div>
      <h2>Advanced Design Patterns</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}><a href={book.link} target="_blank" rel="noopener noreferrer">{book.title}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default AdvancedDesignPatterns;
