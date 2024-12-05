import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AboutScreenStyles.css'; // Importation du fichier CSS

const AboutScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">À propos de MeteoShield</h1>
      <p className="text">
        MeteoShield est une application qui vous aide à rester informé sur les
        conditions météorologiques extrêmes...
      </p>

      {/* Bouton pour revenir à l'accueil */}
      <button className="button" onClick={() => navigate('/')}>
        Retour à l'accueil
      </button>
    </div>
  );
};

export default AboutScreen;
