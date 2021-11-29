import React from 'react';
import Rating from './Rating';

export default function DriverCard({ name, rating, img, car }) {
  return (
    <div>
      <h3> {name}</h3>
      <Rating>{rating}</Rating>
      <img src={img} alt="" />
      <p>
        {car.model} - {car.licensePlate}
      </p>
    </div>
  );
}
