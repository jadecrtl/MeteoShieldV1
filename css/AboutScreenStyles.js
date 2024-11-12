import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B263B', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // Texte blanc
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF', // Texte blanc en dehors des bulles
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  home: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B263B', // Bulles bleues
    padding: 40,
    borderRadius: 15,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF', // Texte blanc dans les bulles
    fontSize: 36,
  },
});
    
export default styles;