// src/components/PackageCard.jsx
import React from 'react';
import '../style/PackageCard.css';

const PackageCard = (props) => {
  return (
    <div className="package-card">
      <img src={props.image} alt={props.title} />
      <div className="package-info">
        <h3>{props.title}</h3>
        <p className='price'>Starting from ${props.price}</p>
        <p>{props.description}</p>
        <p className="days">{props.days}</p>
      </div>
    </div>
  );
};

export default PackageCard;
