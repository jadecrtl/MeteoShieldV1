import React, { useState } from 'react';
import '../css/SettingScreenStyles.css';

const SettingsScreen = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="container">
      <div className="settings">
        <h1 className="title">Paramètres</h1>
        
        {/* Option pour choisir le thème avec un Switch */}
        <div className="themeContainer">
          <p className="option">Thème: {isDarkTheme ? 'Sombre' : 'Clair'}</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={isDarkTheme}
              onChange={toggleTheme}
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* Bouton pour retourner à l'écran d'accueil */}
        <button
          className="button"
          onClick={() => (window.location.href = '/')}
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default SettingsScreen;
