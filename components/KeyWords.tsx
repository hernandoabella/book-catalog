import React from 'react';

const KeyWords = () => {
  const keyWords = [
    'JavaScript Key-Words', 'Python Key-Words'
  ];

  return (
    <div>
      <h2>Key-Words</h2>
      <ul>
        {keyWords.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default KeyWords;
