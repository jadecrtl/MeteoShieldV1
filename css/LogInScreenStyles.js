import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#1B263B', // Fond bleu nuit
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFFFFF', 
    },
    input: {
        borderWidth: 1,
        color: "#FFFFFF",
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5
        
    }
    
});
  
export default styles;