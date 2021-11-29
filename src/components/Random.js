import React from 'react';

function Random({ min, max }) {
  let rand = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div>
      <p>
        Random value between {min} and {max}= {rand}
      </p>
    </div>
  );
}

export default Random;
