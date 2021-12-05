import React from 'react';
import profiles from '../data/berlin.json';

function FaceBook() {
  return (
    <div>
      {profiles.map((elem) => {
        return (
          <div>
            <img src={elem.img} alt="" />
            <p>First name: {elem.firstName}</p>
            <p>Last name: {elem.lastName}</p>
            <p>Country: {elem.country}</p>
            <p>
              Type: {elem.isStudent && 'Student'}
              {!elem.Student && 'Teacher'}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default FaceBook;
