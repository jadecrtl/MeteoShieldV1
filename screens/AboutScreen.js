import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';


const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>À propos de MeteoShield</Text>
      <Text style={styles.text}>MeteoShield est une application qui vous aide à rester informé sur les conditions météorologiques extrêmes...</Text>
  
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2A3B',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8FBC8F',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default AboutScreen;
