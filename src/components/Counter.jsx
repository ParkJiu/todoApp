import React, { useState } from 'react';

export default function Counter({onClick}) {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    onClick();
    setCount((prev) => prev + 1);
  }
  return (
    <div className='counter'>
      <span className="number">{count}</span>
      <button className='button' onClick={handleCount}>Add +</button>
    </div>
  );
}

