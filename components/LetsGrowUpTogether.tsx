import React from 'react';

const LetsGrowUpTogether = () => {
    const books = [
        { title: 'Programming Terms and Definitions', link: 'https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CN2R71J7' },
        { title: '50 Ways to Make Money as a Dev', link: 'https://www.amazon.com/Ways-Make-Money-Dev-developer/dp/B0CXM1JDKL' },
        { title: 'Marketing for Devs', link: '', status: 'working on it' },
        { title: 'Online Presence Guide for devs', link: '', status: 'working on it' },
        { title: 'Time Management Techniques for devs', link: '', status: 'working on it' },
        { title: 'Networking for Developer', link: '', status: 'working on it' },
        { title: 'Effective Communication for Developers', link: '', status: 'working on it' }
    ];

    return (
        <div>
            <h2>🏆 Lets Grow Up Together</h2>
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

export default LetsGrowUpTogether;
