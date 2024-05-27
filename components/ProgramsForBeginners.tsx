import React from 'react';

const ProgramsForBeginners = () => {
  const books = [
    { title: '200+ JavaScript Programs For Beginners', link: 'https://www.amazon.com/JavaScript-Programs-Beginners-Hernando-Abella/dp/B0CQ5KVQGH' },
    { title: '200+ Python Programs For Beginners', link: 'https://www.amazon.com/-/es/Hernando-Abella/dp/B0CVLQTKHG' }
  ];

  return (
    <div>
      <h2>Programs For Beginners</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}><a href={book.link} target="_blank" rel="noopener noreferrer">{book.title}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramsForBeginners;
