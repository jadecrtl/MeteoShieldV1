import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
  },
  about: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#81D4FA',
    padding: 20,
    borderRadius: 15,
    margin: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#01579B',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#004D40',
    marginBottom: 20,
  },
});

export default AboutScreen;
