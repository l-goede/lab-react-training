import React from 'react';

function IdCard(props) {
  return (
    <div>
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>
        Birth: {props.birth.getFullYear()}-{props.birth.getMonth()}-
        {props.birth.getDay()}
      </p>
      <img src={props.picture} alt=""></img>
    </div>
  );
}

export default IdCard;
