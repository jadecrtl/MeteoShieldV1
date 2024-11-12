import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import styles from '../css/AboutScreenStyles'

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>À propos de MeteoShield</Text>
      <Text style={styles.text}>MeteoShield est une application qui vous aide à rester informé sur les conditions météorologiques extrêmes...</Text>
  
    </SafeAreaView>
  );
};

export default AboutScreen;
