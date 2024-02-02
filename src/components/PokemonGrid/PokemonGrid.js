import React, { useState, useEffect, useRef } from "react";
import { fetchData } from "../../api/PokemonAPI";
import PokemonCard from "../PokemonCard/PokemonCard";
import './_PokemonGrid.scss';
import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';

const PokemonGrid = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedPokemons, setDisplayedPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;
  const loader = useRef(null);

  // Charger tous les Pokémon une seule fois
  useEffect(() => {
    const getPokemons = async () => {
      const data = await fetchData();
      if (data) {
        setAllPokemons(data.slice(1)); // Excluez le premier élément si nécessaire
        setDisplayedPokemons(data.slice(1, pageSize + 1)); // Affichez initialement la première "page"
      }
    };
    getPokemons();
  }, []);

  // Mettre à jour la liste affichée lorsque currentPage change
  useEffect(() => {
    const newDisplayedPokemons = allPokemons.slice(0, currentPage * pageSize);
    setDisplayedPokemons(newDisplayedPokemons);
  }, [currentPage, allPokemons]);

  // Observer pour le défilement infini
  useEffect(() => {

    if (searchTerm) {
      return;
    }

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }, { threshold: 1 });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [searchTerm]);

  // Filtrer les Pokémon à chaque fois que searchTerm change
  useEffect(() => {
    if (searchTerm) {
      const searchResults = allPokemons.filter(pokemon =>
        pokemon.name.fr.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDisplayedPokemons(searchResults);
    } else {
      setDisplayedPokemons(allPokemons.slice(0, pageSize + 1))
    }
  }, [searchTerm, allPokemons]);

  return (
    <div>
      <SearchBar onSearchChange={setSearchTerm}/>
      <div className="pokemon-grid">
        {displayedPokemons.map((pokemon, index) => (
          
            <PokemonCard
              name={pokemon.name.fr}
              image={pokemon.sprites.regular}
              types={pokemon.types}
              pokedexId={pokemon.pokedexId}
              pokemon={pokemon}
            />
          
        ))}
        <div ref={loader} style={{ height: '100px', visibility: 'hidden' }}>Charger plus</div>
      </div>
    </div>
  );
}
export default PokemonGrid;

