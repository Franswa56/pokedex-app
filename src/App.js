import React from 'react';
import './App.css'; // Si vous avez des styles globaux
import PokemonGrid from './components/PokemonGrid/PokemonGrid'; // Assurez-vous que le chemin est correct
import PokemonCard from './components/PokemonCard/PokemonCard';
import HomePage from './pages/HomePage';

function App() {
  return (
    <HomePage/>
  );
}

export default App;