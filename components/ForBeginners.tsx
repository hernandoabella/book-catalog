import React from 'react';

const ForBeginners = () => {
  const books = [
    { title: 'Rust for beginners', link: 'https://www.amazon.com/Rust-Beginners-Lets-Learn-together/dp/B0CT3NP1JB' },
    { title: 'JavaScript for beginners', link: 'https://www.amazon.com/JavaScript-Beginners-Hernando-Abella/dp/B0CRHYGXNC' }
  ];

  return (
    <div>
      <h2>For Beginners</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}><a href={book.link} target="_blank" rel="noopener noreferrer">{book.title}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default ForBeginners;
