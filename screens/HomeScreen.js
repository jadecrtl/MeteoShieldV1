import React, { useState } from 'react';
import '../css/HomeScreenStyles.css'; // Importation du fichier CSS

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="container">
      <div className="home">
        <h1 className="title">Météo Actuelle</h1>

        {/* Bouton pour ouvrir le menu */}
        <div className="menuButtonContainer">
          <button 
            onClick={() => setModalVisible(true)} 
            className="customButton"
          >
            <img
              src="./assets/logo_home_maj_edited_V1.png" 
              alt="Logo Home"
              className="image"
            />
          </button>
        </div>

        {/* Modal pour le menu */}
        {modalVisible && (
          <div className="modalContainer">
            <div className="modalView">
              <h2 className="modalTitle">Menu</h2>

              {/* Boutons du menu */}
              <button className="modalButton">Connexion</button>
              <button className="modalButton">Inscription</button>
              <button className="modalButton">Paramètres</button>
              <button className="modalButton">À propos</button>

              {/* Bouton pour fermer le modal */}
              <button 
                onClick={() => setModalVisible(false)} 
                className="closeButton"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
