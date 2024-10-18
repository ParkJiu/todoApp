import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';

export default function AppCounter() {
  const [totalCnt, setTotalCnt] = useState(0);
  const handleClick = () => setTotalCnt((prev) => prev + 1);
  return (
    <div>
      <span className='totalCnt'>Total Count: {totalCnt} {totalCnt >= 10 ? '🔥' : '🧊'}</span>
      <Counter onClick={handleClick} />
      <Counter onClick={handleClick} />
    </div>
  );
}

