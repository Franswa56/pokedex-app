import React, { useState, useEffect } from "react";
import { fetchData } from "../../api/PokemonAPI"; // Assurez-vous que le chemin d'importation est correct
import PokemonCard from "../PokemonCard/PokemonCard"; // Assurez-vous que le chemin d'importation est correct
import './_PokemonGrid.scss'
const PokemonGrid = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const data = await fetchData();
      if (data) {
        setPokemons(data); // Assurez-vous que la structure de 'data' correspond à ce que votre composant attend
      }
    };

    getPokemons();
  }, []);

  return (
    <div className="pokemon-grid">
         {console.log('coucou', pokemons)}
      {pokemons.slice(1).map((pokemon, index) => (
        <PokemonCard
          key={index} // Il est préférable d'utiliser un identifiant unique si disponible, par exemple `pokemon.id`
          name={pokemon.name.fr} // Supposant que 'name' est un objet avec des propriétés localisées
          image={pokemon.sprites.regular} // Supposant que 'sprites' est un objet contenant 'regular'
          types={pokemon.types}
        />
      ))}
    </div>
  );
};

export default PokemonGrid;
