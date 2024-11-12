import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Fond blanc
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Texte noir
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#000000', // Texte noir en dehors des bulles
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
    
export default styles;