import React from 'react';

const InterviewQuestions = () => {
  const books = [
    { title: '120 Advanced JavaScript Interview Questions', link: 'https://www.amazon.com/120-Advanced-JavaScript-Interview-Questions/dp/B0CL9ZKTLV' },
    { title: '120 Advanced Python Interview Questions', link: 'https://www.amazon.com/dp/B0CLM68FNR' }
  ];

  return (
    <div>
      <h2>120 Advanced Interview Questions</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}><a href={book.link} target="_blank" rel="noopener noreferrer">{book.title}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default InterviewQuestions;
