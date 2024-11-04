import React from 'react'; // Importation de React pour créer des composants
import { NavigationContainer } from '@react-navigation/native'; // Conteneur pour la navigation dans l'application
import { createStackNavigator } from '@react-navigation/stack'; // Création d'un navigateur à pile
import { StatusBar } from 'expo-status-bar'; // Importation pour gérer la barre d'état de l'application
import HomeScreen from './screens/HomeScreen'; // Importation de l'écran d'accueil
import AboutScreen from './screens/AboutScreen'; // Importation de l'écran à propos*
import SignUpScreen from './screens/SignUpScreen';

// Création d'une instance de Stack Navigator
const Stack = createStackNavigator();

// Composant principal de l'application
export default function App() {
  return (
    // Conteneur principal pour la navigation
    <NavigationContainer>
      {/* Définition du navigateur à pile */}
      <Stack.Navigator initialRouteName="Home">
        {/* Écran d'accueil avec titre personnalisé */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
        
        {/* Écran à propos avec titre personnalisé */}
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'À propos' }} />
      </Stack.Navigator>
      {/* Configuration de la barre d'état */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
