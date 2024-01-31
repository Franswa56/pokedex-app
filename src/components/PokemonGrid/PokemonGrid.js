import React, { useState, useEffect, useRef } from "react";
import { fetchData } from "../../api/PokemonAPI";
import PokemonCard from "../PokemonCard/PokemonCard";
import './_PokemonGrid.scss';

const PokemonGrid = () => {
  const [allPokemons, setAllPokemons] = useState([]);
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
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }, { threshold: 0.1 });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  return (
    <div className="pokemon-grid">
      {displayedPokemons.map((pokemon, index) => (
        <PokemonCard
          key={index} // Utilisez un identifiant unique si disponible
          style={{ animationDelay: `${75 * index}ms` }}
          name={pokemon.name.fr}
          image={pokemon.sprites.regular}
          types={pokemon.types}
          pokedexId={pokemon.pokedexId}
        />
      ))}
      <div ref={loader} style={{ height: '100px', visibility: 'hidden' }}>Charger plus</div>
    </div>
  );
};

export default PokemonGrid;

