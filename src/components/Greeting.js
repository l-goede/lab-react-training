import React from 'react';

function Greeting({ lang, children }) {
  let text = '';
  if (lang === 'de') {
    text = 'Hallo';
  } else if (lang === 'fr') {
    text = 'Bonjour';
  } else if (lang === 'es') {
    text = 'Hola';
  } else if (lang === 'en') {
    text = 'Hello';
  }
  return (
    <div>
      {text} {children}
    </div>
  );
}
export default Greeting;
