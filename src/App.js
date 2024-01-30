import React from 'react';
import './App.css'; // Si vous avez des styles globaux
import PokemonGrid from './components/PokemonGrid/PokemonGrid'; // Assurez-vous que le chemin est correct
import PokemonCard from './components/PokemonCard/PokemonCard';

function App() {
  return (
    <div className="App">
      <main>
        <PokemonGrid/>
      </main>
      <footer>
        {/* Pied de page de l'application */}
      </footer>
    </div>
  );
}

export default App;