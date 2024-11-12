import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#1B263B', // Fond bleu nuit
    padding: 20,
  },
  image:{
    width: 70,
    height: 70,
    marginHorizontal: 10,
  },
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#344D72', // Bulles bleu nuit plus clair
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
    color: '#FFFFFF', // Texte blanc
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'justify',
    color: '#DDE1E4', // Texte gris clair pour contraste
    marginBottom: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(27, 38, 80, 0.8)', // Fond modal semi-transparent bleu nuit
  },
  modalView: {
    backgroundColor: '#1B263B',
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
    color: '#FFFFFF', // Texte blanc
  },
  modalButton: {
    backgroundColor: '#344D72', // Boutons bleu nuit plus clair
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
    color: '#FFFFFF', // Texte blanc dans les bulles bleu nuit plus clair
    fontSize: 36,
  },
});

export default styles;
