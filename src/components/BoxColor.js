import React from 'react';

function BoxColor({ r, g, b }) {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  return (
    <div style={divStyle}>
      <p>
        rgb({r},{g},{b})
      </p>
    </div>
  );
}

export default BoxColor;
