import React, { useState, useEffect } from 'react';

export default function UseEffectsDemo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  const handleAdd = () => {
    setCount(prevCouont => prevCouont + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
