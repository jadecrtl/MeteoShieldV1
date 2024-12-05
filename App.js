import React from 'react'; // Importation de React pour créer des composants
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import SignUpScreen from './screens/SignUpScreen';
import LogInScreen from './screens/LogInScreen';
import SettingScreen from './screens/SettingScreen';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LogInScreen />} />
        <Route path="/settings" element={<SettingScreen />} />
      </Routes>
    </Router>
  );
}