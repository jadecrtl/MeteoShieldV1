import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import styles from '../css/LogInScreenStyles'; // Importation des styles

const LogInScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', {
                username,
                password
            });
            Alert.alert('Success', 'Login successful!', [
                { text: 'OK', onPress: () => navigation.navigate('Home') }
            ]);
        } catch (error) {
            Alert.alert('Error', error.response?.data?.message || 'Invalid credentials');
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
                />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
                />
            <Button title="Log In" onPress={handleLogIn} />
        </View>
    );
};

export default LogInScreen;
