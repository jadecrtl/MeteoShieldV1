import React, { useState } from 'react'; 
import { SafeAreaView, View, Text, Button, StyleSheet, Switch } from 'react-native';
import styles from '../css/SettingScreenStyles';

const SettingsScreen = ({ navigation }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true); 


  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.settings}>
        <Text style={styles.title}>Paramètres</Text>
        
        {/* Option pour choisir le thème avec un Switch */}
        <View style={styles.themeContainer}>
          <Text style={styles.option}>Thème: {isDarkTheme ? 'Sombre' : 'Clair'}</Text>
          <Switch
            value={isDarkTheme} // Valeur du Switch (sombre ou clair)
            onValueChange={toggleTheme} // Action pour basculer entre les thèmes
            thumbColor={isDarkTheme ? "#8FBC8F" : "#f4f3f4"} // Couleur du bouton du Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }} // Couleur de la piste du Switch
          />
        </View>

        {/* Bouton pour retourner à l'écran d'accueil */}
        <Button
          title="Retour à l'accueil" // Texte affiché sur le bouton
          onPress={() => navigation.navigate('Home')} // Action à effectuer lors du pressage du bouton
          color="#007ACC" // Couleur du bouton
        />
        </View>
    </SafeAreaView>
  );
};

// Exportation du composant SettingsScreen pour l'utiliser dans d'autres parties de l'application
export default SettingsScreen;
