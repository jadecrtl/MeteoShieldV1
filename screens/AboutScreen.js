import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

// Composant AboutScreen qui affiche des informations sur l'application MeteoShield
const AboutScreen = () => {
  return (
    // Utilisation de SafeAreaView pour éviter les chevauchements avec les éléments de l'interface utilisateur du système
    <SafeAreaView style={styles.container}>
      <View style={styles.about}>
        {/* Titre de la section "À propos de MeteoShield" */}
        <Text style={styles.title}>À propos de MeteoShield</Text>
        
        {/* Description de l'application et de ses fonctionnalités */}
        <Text style={styles.text}>
          MeteoShield est une application conçue pour vous protéger des événements météorologiques extrêmes.
          Suivez les alertes météo et personnalisez vos notifications selon vos préférences.
        </Text>
      </View>
    </SafeAreaView>
  );
};

// Styles pour le composant AboutScreen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Utilisation de flex pour remplir tout l'espace disponible
    backgroundColor: '#1E1E2F', // Couleur de fond sombre pour un contraste avec le contenu
    padding: 20, // Espacement autour du conteneur principal
  },
  about: {
    flex: 1, // Permet au contenu de prendre tout l'espace vertical
    justifyContent: 'center', // Centrer le contenu verticalement
    alignItems: 'center', // Centrer le contenu horizontalement
    backgroundColor: '#2A2A3B', // Couleur de fond de la section "À propos"
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


// Exportation du composant AboutScreen pour l'utiliser dans d'autres parties de l'application
export default AboutScreen;
