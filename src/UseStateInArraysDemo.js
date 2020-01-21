import React, { useState } from 'react';

const DemoArray = () => {
  const [names, addNames] = useState([]);

  const addName = () => {
    addNames([...names, Math.floor(Math.random() * 10) + 1])
  }

  return (
    <div>
      <ul>
        {names.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
      <button onClick={addName}>Add Name</button>
    </div>
  );
};

export default DemoArray;
