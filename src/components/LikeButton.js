import React from 'react';
import { useState } from 'react';

export default function LikeButton() {
  let [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  let colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <button style={{ backgroundColor: randomColor }} onClick={handleClick}>
      Like {count}
    </button>
  );
}
