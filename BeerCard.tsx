import React from 'react';

interface Beer {
  name: string;
  description: string;
  image: string;
}

const BeerCard: React.FC<Beer> = ({ name, description, image }) => {
  return (
    <div className="beer-card">
      <img src={image} alt={name} className="beer-image" />
      <h2 className="beer-name">{name}</h2>
      <p className="beer-description">{description}</p>
    </div>
  );
};

export default BeerCard;