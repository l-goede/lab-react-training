import React from 'react';

export default function Rating({ children }) {
  let rating =
    '★'.repeat(Math.round(children)) + '☆'.repeat(5 - Math.round(children));
  return (
    <div>
      <p>{rating}</p>
    </div>
  );
}
