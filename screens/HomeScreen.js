import React from 'react'; // Importation de React pour créer des composants
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native'; // Importation des composants nécessaires de React Native

// Composant HomeScreen qui représente l'écran d'accueil de l'application
const HomeScreen = ({ navigation }) => {
  return (
    // Utilisation de SafeAreaView pour éviter les chevauchements avec les éléments de l'interface utilisateur du système
    <SafeAreaView style={styles.container}>
      <View style={styles.home}>
        {/* Titre de l'application MeteoShield */}
        <Text style={styles.title}>MeteoShield</Text>
        
        {/* Message de bienvenue pour l'utilisateur */}
        <Text style={styles.text}>Bienvenue sur l'application MeteoShield</Text>
        
        {/* Bouton pour naviguer vers l'écran "À propos" */}
        <Button
          title="À propos" // Texte affiché sur le bouton
          onPress={() => navigation.navigate('About')} // Action à effectuer lors du pressage du bouton : navigation vers l'écran "About"
          color="#007ACC" // Couleur du bouton
        />
      </View>
    </SafeAreaView>
  );
};

// Styles pour le composant HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Utilisation de flex pour remplir tout l'espace disponible
    backgroundColor: '#1E1E2F', // Couleur de fond sombre pour un contraste avec le contenu
    padding: 20, // Espacement autour du conteneur principal
  },
  home: {
    flex: 1, // Permet au contenu de prendre tout l'espace vertical
    justifyContent: 'center', // Centrer le contenu verticalement
    alignItems: 'center', // Centrer le contenu horizontalement
    backgroundColor: '#2A2A3B', // Couleur de fond de la section d'accueil
    padding: 40, // Espacement intérieur de 40 unités
    borderRadius: 15, // Coins arrondis pour un aspect esthétique
    margin: 15, // Marges autour de la section
    shadowColor: '#000', // Couleur de l'ombre
    shadowOffset: { width: 0, height: 2 }, // Décalage de l'ombre
    shadowOpacity: 0.3, // Opacité de l'ombre
    shadowRadius: 4, // Rayon de l'ombre
    elevation: 5, // Élévation pour Android
  },
  title: {
    fontSize: 36, // Taille de la police pour le titre
    fontWeight: 'bold', // Mettre le texte en gras
    color: '#8FBC8F', // Couleur du texte du titre (orange vif)
    marginBottom: 20, // Marge en bas du titre pour espacer du texte suivant
    textAlign: 'center', // Centrer le titre
  },
  text: {
    fontSize: 20, // Taille de la police pour le texte descriptif
    textAlign: 'justify', // Justifier le texte
    color: '#FFFFFF', // Couleur du texte descriptif (blanc)
    marginBottom: 30, // Marge en bas du texte pour espacer d'éventuels éléments suivants
  },
});



// Exportation du composant HomeScreen pour l'utiliser dans d'autres parties de l'application
export default HomeScreen;
