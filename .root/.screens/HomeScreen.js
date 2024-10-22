import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.home}>
        <Text style={styles.title}>MeteoShield</Text>
        <Text style={styles.text}>Bienvenue sur l'application MeteoShield</Text>
        <Button
          title="À propos"
          onPress={() => navigation.navigate('About')}
          color="#007ACC"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
  },
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80DEEA',
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

export default HomeScreen;
