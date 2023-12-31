import React from 'react';
import logements from '../logements.json';
import { Link } from 'react-router-dom';

const Cards = () => {

  return (
    <>
      {logements.map((logement) => (
        <div key={logement.id} className='card'>
          <Link to="/Card">
          <img src={logement.cover} alt={logement.title} />
          <div className="overlay">
          <h3>{logement.title}</h3>
          </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Cards;
