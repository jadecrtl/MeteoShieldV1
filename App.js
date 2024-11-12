import React from 'react'; // Importation de React pour créer des composants
import { NavigationContainer } from '@react-navigation/native'; // Conteneur pour la navigation dans l'application
import { createStackNavigator } from '@react-navigation/stack'; // Création d'un navigateur à pile
import { StatusBar } from 'expo-status-bar'; // Importation pour gérer la barre d'état de l'application
import HomeScreen from './screens/HomeScreen'; // Importation de l'écran d'accueil
import AboutScreen from './screens/AboutScreen'; // Importation de l'écran à propos
import SignUpScreen from './screens/SignUpScreen'; // Importation de la page d'inscription
import LogInScreen from './screens/LogInScreen'; // Importation de la page de connexion
import SettingScreen from './screens/SettingScreen'; // Importation de la page des parametres

// Création d'une instance de Stack Navigator
const Stack = createStackNavigator();

// Composant principal de l'application
export default function App() {
  return (
    // Conteneur principal pour la navigation
    <NavigationContainer>
      {/* Définition du navigateur à pile */}
      <Stack.Navigator initialRouteName="Home">
    
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />

        <Stack.Screen name="Settings" component={SettingScreen} options={{ title: 'Settings' }} />
        
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />

        <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ title: 'Sign Up' }} />

        <Stack.Screen name="Log In" component={LogInScreen} options={{ title: 'Log In' }} />
      </Stack.Navigator>
      {/* Configuration de la barre d'état */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
