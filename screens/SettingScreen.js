import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SettingScreenStyles.css';

const SettingsScreen = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="container">
      <div className="settings">
        <h1 className="title">Paramètres</h1>

        {/* Bouton pour retourner à l'écran d'accueil */}
        <button className="button" onClick={() => navigate('/')}>
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default SettingsScreen;
