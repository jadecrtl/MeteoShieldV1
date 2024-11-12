import React, { useState, useCallback } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native'; 
import { useFocusEffect } from '@react-navigation/native'; // Importer useFocusEffect
import styles from '../css/HomeScreenStyles';

const HomeScreen = ({ navigation }) => { 
  const [modalVisible, setModalVisible] = useState(false);

  // Réinitialise le state à chaque retour sur l'écran Home
  useFocusEffect(
    useCallback(() => {
      setModalVisible(false); // Ferme le modal quand on revient sur l'écran
    }, [])
  );

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
                <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('Log In')}>
                  <Text style={styles.modalButtonText}>Connexion</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('Sign Up')}>
                  <Text style={styles.modalButtonText}>Inscription</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('Settings')}>
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

// Exportation du composant HomeScreen pour l'utiliser dans d'autres parties de l'application
export default HomeScreen;
