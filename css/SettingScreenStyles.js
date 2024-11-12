import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1, // Utilisation de flex pour remplir tout l'espace disponible
      backgroundColor: '#1B263B', // Couleur de fond sombre pour un contraste avec le contenu
      padding: 20, // Espacement autour du conteneur principal
    },
    settings: {
      flex: 1, // Permet au contenu de prendre tout l'espace vertical
      justifyContent: 'center', // Centrer le contenu verticalement
      alignItems: 'center', // Centrer le contenu horizontalement
      backgroundColor: '#1B263B', // Couleur de fond de la section des paramètres
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
      color: '#FFFFFF', // Couleur du texte du titre
      marginBottom: 20, // Marge en bas du titre pour espacer du texte suivant
      textAlign: 'center', // Centrer le titre
    },
    option: {
      fontSize: 20, // Taille de la police pour les options
      color: '#FFFFFF', // Couleur du texte des options (blanc)
      marginBottom: 15, // Marge en bas des options pour espacer
      textAlign: 'center', // Centrer le texte des options
    },
    themeContainer: {
      flexDirection: 'row', // Positionne le texte et le Switch sur la même ligne
      alignItems: 'center',
      marginBottom: 15,
      backgroundColor: '#344D72',

    },
  });

export default styles;