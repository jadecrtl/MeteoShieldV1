import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF', // Fond blanc
    padding: 20,
  },
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007ACC', // Bulles bleues
    padding: 40,
    borderRadius: 15,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  menuButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000', // Texte noir
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'justify',
    color: '#000000', // Texte noir
    marginBottom: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000000', // Texte noir
  },
  modalButton: {
    backgroundColor: '#007ACC', // Boutons bleus
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#FFFFFF', // Texte blanc dans les boutons
    fontSize: 18,
  },
  buttonText: {
    color: '#FFFFFF', // Texte blanc dans les bulles bleues
    fontSize: 36,
  },
});
  
export default styles;