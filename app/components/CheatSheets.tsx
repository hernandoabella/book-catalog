import React from 'react';

const CheatSheets = () => {
    const cheatSheets = [
        'C#', 'Python', 'TypeScript', 'JavaScript', 'Go', 'Java', 'CPP', 'C', 'Ruby', 'Elixir', 'Julia'
    ];

    return (
        <div>
            <h2>Cheat-Sheets</h2>
            <ul>
                {cheatSheets.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default CheatSheets;
