import React from "react";
import logements from "../logements.json";

const Card = () => {
  return (
    <>
      {logements.map((logement) => (
        <div key={logement.id}>
          <img src={logement.cover} alt={logement.title} />
          <div className="overlay">
            <h3>{logement.title}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
