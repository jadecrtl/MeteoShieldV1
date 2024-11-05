import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native'; 
import SettingsScreen from './SettingScreen';

// Composant HomeScreen qui représente l'écran d'accueil de l'application
const HomeScreen = ({ navigation }) =>{ 
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
    flex: 1, 
    backgroundColor: '#FFFFFF', // Fond blanc
    padding: 20,
  },
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007ACC', // Bulles bleues
    padding: 40,
    borderRadius: 15,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  menuButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000', // Texte noir
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'justify',
    color: '#000000', // Texte noir
    marginBottom: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: '#FFFFFF',
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
    color: '#000000', // Texte noir
  },
  modalButton: {
    backgroundColor: '#007ACC', // Boutons bleus
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#FFFFFF', // Texte blanc dans les boutons
    fontSize: 18,
  },
  buttonText: {
    color: '#FFFFFF', // Texte blanc dans les bulles bleues
    fontSize: 36,
  },
});


// Exportation du composant HomeScreen pour l'utiliser dans d'autres parties de l'application
export default HomeScreen;
