import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

              {/* Boutons du menu avec liens */}
              <Link to="/login">
                <button className="modalButton">Connexion</button>
              </Link>
              <Link to="/signup">
                <button className="modalButton">Inscription</button>
              </Link>
              <Link to="/settings">
                <button className="modalButton">Paramètres</button>
              </Link>
              <Link to="/about">
                <button className="modalButton">À propos</button>
              </Link>

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
