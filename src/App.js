import React from "react";
import "./App.css"; // Si vous avez des styles globaux
import PokemonGrid from "./components/PokemonGrid/PokemonGrid"; // Assurez-vous que le chemin est correct
import PokemonCard from "./components/PokemonCard/PokemonCard";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/pokemon/:pokedexId" element={<VotreComposantDePageDeDétailPokémon />} />  */}
        <Route path="/" element={<HomePage />} /> {/* Correction ici */}
      </Routes>
    </Router>
  );
}

export default App;
