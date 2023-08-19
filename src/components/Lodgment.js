import React from 'react';
import data from '../logements.json';

const Logements = () => {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className='card'>
          <img src={item.cover} alt={item.title} />
          <div className="overlay">
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default Logements;
