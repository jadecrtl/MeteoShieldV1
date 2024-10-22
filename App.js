import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';


// Pages de l'application
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.home}>
        <Text style={styles.title}>MeteoShield</Text>
        <Text style={styles.text}>Bienvenue sur l'application MeteoShield Test Aaishah
        </Text>
        <Button
          title="À propos"
          onPress={() => navigation.navigate('About')}
          color="#007ACC" // Bleu clair pour le bouton
        />
      </View>
    </SafeAreaView>
  );
};

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.about}>
        <Text style={styles.title}>À propos de MeteoShield</Text>
        <Text style={styles.text}>
          MeteoShield est une application conçue pour vous protéger des événements météorologiques extrêmes.
          Suivez les alertes météo et personnalisez vos notifications selon vos préférences.
        </Text>
      </View>
    </SafeAreaView>
  );
};

// Création de la navigation entre les écrans
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />

        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'À propos' }} />
      </Stack.Navigator>
      <View style={styles.container}>
        <Text></Text>
        <StatusBar style="auto" />
        </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA', // Bleu très léger pour le fond
  },
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80DEEA', // Bleu clair pour l'arrière-plan de la page d'accueil
    padding: 20,
    borderRadius: 15,
    margin: 15,
  },
  about: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#81D4FA', // Bleu plus clair pour la page About
    padding: 20,
    borderRadius: 15,
    margin: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#01579B', // Bleu foncé pour le texte des titres
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#004D40', // Vert-bleu foncé pour les paragraphes
    marginBottom: 20,
  },
});
