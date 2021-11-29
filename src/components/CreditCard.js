import React from 'react';
import imgVisa from '../assets/images/visa.png';
import imgMaster from '../assets/images/master-card.svg';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  let cardType = '';
  if (type === 'Visa') {
    cardType = imgVisa;
  } else if (type === 'Master Card') {
    cardType = imgMaster;
  }

  let cardNumber = number.replace(/\d(?=\d{4})/g, '*');
  let divStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };
  return (
    <div style={divStyle}>
      <img src={cardType} alt="" />
      <p>{cardNumber}</p>
      <p>
        Expires {expirationMonth}/{expirationYear} {bank}
      </p>

      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;
