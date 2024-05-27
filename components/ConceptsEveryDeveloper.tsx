import React from 'react';

const ConceptsEveryDeveloper = () => {
  const books = [
    { title: '50 Python Concepts Every Developer Show Know', link: 'https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CW9LWMTB' },
    { title: '50 C Concepts Every Developer Should Know', link: '', status: 'working on it' },
    { title: '50 C++ Concepts Every Developer Should Know', link: '', status: 'working on it' },
    { title: '50 C# Concepts Every Developer Should Know', link: 'https://www.amazon.com/dp/B0CVFYGK2B' },
    { title: '50 JavaScript Concepts Every Developer Should Know', link: 'https://www.amazon.com/Hernando-Abella-ebook/dp/B0CNC4WZT6' },
    { title: '50 Java Concepts Every Developer Should Know', link: 'https://www.amazon.com/Java-Concepts-Every-Developer-Should-ebook/dp/B0CPPZ1BVM' },
    { title: '50 Go Concepts Every Developer Should Know', link: '', status: 'working on it' },
    { title: '50 Kotlin Concepts Every Developer Should Know', link: '', status: 'working on it' },
    { title: '50 Ruby Concepts Every Developer Should Know', link: '', status: 'working on it' }
  ];

  return (
    <div>
      <h2>50 Concepts Every Developer Show Know</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.link ? (
              <a href={book.link} target="_blank" rel="noopener noreferrer">{book.title}</a>
            ) : (
              <span>{book.title} [{book.status}]</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConceptsEveryDeveloper;
