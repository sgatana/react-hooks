import React, { useState, useEffect } from 'react';

export default function SetTimerHooks() {
  const [count, setCount] = useState(0);

  const incrementTimer = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(incrementTimer, 1000);
    return () => {
      clearInterval(interval);
    };
  }); // set the interval once in the render


  return (
    <div>
      <p>In hooks, your timer is: {count}</p>
    </div>
  );
}
