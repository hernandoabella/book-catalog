import React from 'react';

const KillerOneLiners = () => {
  const books = [
    { title: '250+ C Killer One-Liners', link: '', status: 'working on it' },
    { title: '250+ C++ Killer One-Liners', link: '', status: 'working on it' },
    { title: '250+ C# Killer One-Liners', link: 'https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0D2ZM71J8' },
    { title: '250+ Java Killer One-Liners', link: '', status: 'working on it' },
    { title: '250+ Python Killer One-Liners', link: '', status: 'working on it' },
    { title: '250+ Ruby Killer One-Liners', link: 'https://www.amazon.com/250-Killer-Ruby-One-Liners-Transform-ebook/dp/B0CXF57XT9' },
    { title: '250+ Go Killer One-Liners', link: '', status: 'working on it' },
    { title: '250+ Kotlin Killer One-Liners', link: '', status: 'working on it' },
    { title: '250+ TypeScript Killer One-Liners', link: 'https://www.amazon.com/250-Killer-TypeScript-One-Liners-Transform-ebook/dp/B0CYHZ5QKJ' },
    { title: '250+ JavaScript Killer One-Liners', link: 'https://www.amazon.com/Hernando-Abella/dp/B0CN58RHGF' }
  ];

  return (
    <div>
      <h2>250+ Killer One-Liners</h2>
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

export default KillerOneLiners;
