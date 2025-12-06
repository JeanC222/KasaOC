import React from "react";
import logements from "../logements.json";
import { useParams } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Collapse from "./Collapse";

const Card = () => {
  const { id } = useParams(); // Récupère l'ID de la carte depuis l'URL
  console.log("ID extrait de l'URL :", id); // Vérification dans la console

  const selectedCard = logements.find((card) => card.id === id); // Peut-être besoin de convertir en nombre : parseInt(id)

  return (
    <>
      <header>
        <Logo />
        <Navigation />
      </header>

      <div>
        {/* Affichez les détails de la carte en fonction de l'ID */}
        {selectedCard ? (
          <div className="card-details-container" key={selectedCard.id}>
            <div>
              <img
                className="banner"
                src={selectedCard.cover}
                alt={selectedCard.title}
              />
            </div>

            <div className="positionning-handler">
              <div className="details-row">
                <div className="title">
                  <h1>{selectedCard.title}</h1>
                  <h3>{selectedCard.location}</h3>
                </div>

                <div className="tags">
                  {selectedCard.tags.map((tag, index) => (
                    <p key={index}>{tag}</p>
                  ))}
                </div>
              </div>

              <div className="details-right">
                <p>{selectedCard.host.name}</p>
                <img
                  className="host"
                  src={selectedCard.host.picture}
                  alt={selectedCard.host.name}
                />
              </div>
            </div>

            <div className="collapses">
              <Collapse customClass="collapse-details" title="Description">
                <p>{selectedCard.description}</p>
              </Collapse>

              <Collapse customClass="collapse-details" title="Équipements">
                <ul>
                  {selectedCard.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              </Collapse>
            </div>
          </div>
        ) : (
          <p>La carte avec l'ID {id} n'existe pas.</p>
        )}
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Card;
