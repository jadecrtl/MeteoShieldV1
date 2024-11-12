import React, { useState, useCallback } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native'; 
import { useFocusEffect } from '@react-navigation/native'; // Importer useFocusEffect
import styles from '../css/HomeScreenStyles';
import { getUserLocation } from '../components/Geolocalisation'; // Importer la fonction de géolocalisation


const HomeScreen = ({ navigation }) => { 
  const [modalVisible, setModalVisible] = useState(false);
  const [weather, setWeather] = useState(null); // Pour stocker les données météo
  const [searchQuery, setSearchQuery] = useState(''); // Pour stocker la ville recherchée


  // Réinitialise le state à chaque retour sur l'écran Home
  useFocusEffect(
    useCallback(() => {
      setModalVisible(false); // Ferme le modal quand on revient sur l'écran
    }, [])
  );

  /* Récupérer la géolocalisation et les données météo
  const newLocal = useEffect(() => {
    getUserLocation(setWeather); // Appeler la fonction pour obtenir la géolocalisation et la météo
  }, []);*/

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.home}>
        <Text style={styles.title}>Météo Actuelle</Text>


        {/* Bouton pour ouvrir le menu */}
        <View style={styles.menuButtonContainer}>
          <TouchableOpacity 
            onPress={() => setModalVisible(true)} // Ouvrir le modal lors du clic
            style={styles.customButton}
          >
            <Image
              source={require("../assets/logo_home_maj_edited_V1.png")} // Chemin de l'image
              style={styles.image}
            />
          </TouchableOpacity>
        </View>

        {/* Modal pour le menu */}
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