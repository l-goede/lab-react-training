import React from 'react';

function NumbersTable(limit) {
  let table = [];
  for (let i = 1; i < limit; i++) {
    let num = {
      number: i,
      backgroundColor: i % 2 ? 'red' : 'white',
    };
    table.push(num);
  }
  return (
    <div>
      {table.map((elem, index) => {
        return (
          <div key={index} style={{ backgroundColor: elem.backGroundColor }}>
            {elem.number}
          </div>
        );
      })}
    </div>
  );
}

export default NumbersTable;
