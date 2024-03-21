import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage/PokemonPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pokemon/:pokedex_id" element={<PokemonPage />} />
        <Route path="/" element={<HomePage />} /> {/* Correction ici */}
      </Routes>
    </Router>
  );
}

export default App;
