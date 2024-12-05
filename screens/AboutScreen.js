import React from 'react';
import '../css/AboutScreenStyles.css'; // Importation du fichier CSS

const AboutScreen = () => {
  return (
    <div className="container">
      <h1 className="title">À propos de MeteoShield</h1>
      <p className="text">
        MeteoShield est une application qui vous aide à rester informé sur les conditions météorologiques extrêmes...
      </p>
    </div>
  );
};

export default AboutScreen;
