import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native'; 
import SettingsScreen from './SettingScreen';

// Composant HomeScreen qui représente l'écran d'accueil de l'application
const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.home}>
        <Text style={styles.title}>Bienvenue sur la page d'accueil de MeteoShield</Text>
        <Text style={styles.text}>Page d'accueil de l'application</Text>
        
        <View style={styles.menuButtonContainer}>
          <TouchableOpacity 
            onPress={() => setModalVisible(true)} // Ouvrir le modal lors du clic
            style={styles.customButton}
          >
            <Text style={styles.buttonText}>‾‾‾</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide" // Animation du modal (défilement du bas)
          transparent={true} // Modal transparent pour voir l'arrière-plan
          visible={modalVisible} // Contrôle de la visibilité du modal
          onRequestClose={() => setModalVisible(false)} // Fermer le modal quand l'utilisateur appuie en dehors
        >
        

            <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Menu</Text>

              {/* Boutons du menu */}
              <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('Connexion')}>
                <Text style={styles.modalButtonText}>Connexion</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('Inscription')}>
                <Text style={styles.modalButtonText}>Inscription</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('Parametres')}>
                <Text style={styles.modalButtonText}>Paramètres</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('About')}>
                <Text style={styles.modalButtonText}>À propos</Text>
              </TouchableOpacity>

              {/* Bouton pour fermer le modal */}
              <Button title="Fermer" onPress={() => setModalVisible(false)} color="#007ACC" />
            </View>

           </View>
        </Modal>
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
  menuButtonContainer: {
    position: 'absolute', // Positionner le bouton en absolu
    top: 20, // Distance du haut
    right: 20, // Distance de la droite
  },
  title: {
    fontSize: 36, // Taille de la police pour le titre
    fontWeight: 'bold', // Mettre le texte en gras
    color: '#8FBC8F', // Couleur du texte du titre
    marginBottom: 20, // Marge en bas du titre pour espacer du texte suivant
    textAlign: 'center', // Centrer le titre
  },
  text: {
    fontSize: 20, // Taille de la police pour le texte descriptif
    textAlign: 'justify', // Justifier le texte
    color: '#FFFFFF', // Couleur du texte descriptif (blanc)
    marginBottom: 30, // Marge en bas du texte pour espacer d'éventuels éléments suivants
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond transparent sombre
  },
  modalView: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: '#007ACC',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  buttonText: {
    color: '#FFFFFF', // Couleur du texte des traits
    fontSize: 36, // Taille de la police pour le texte des traits
  },

});

// Exportation du composant HomeScreen pour l'utiliser dans d'autres parties de l'application
export default HomeScreen;
