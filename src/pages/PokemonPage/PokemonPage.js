import { useLocation} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import PageSprite from "../../components/PageSprite/PageSprite";
import Info from "../../components/Infos/Infos";
import { typeGradients } from "../../assets/images/colors/colors";
import "./_PokemonPage.scss";
import Tabs from "../../components/Tabs/Tabs";
import Stats from "../../components/Stats/Stats";
import Resi from "../../components/Resi/Resi.js"
import Evo from "../../components/Evo/Evo.js";
import { Link } from "react-router-dom";

const PokemonPage = () => {
  const location = useLocation();
  const [pokemon, setPokemon] = useState(null); // Initialisation de l'état local pokemon avec null comme valeur par défaut

  useEffect(() => {
    // Vérifie si location.state contient directement les données du Pokémon ou si elles sont dans une propriété 'pokemon'
    if (location.state?.pokemon) {
      // Si les données sont dans une propriété 'pokemon', utilisez cette propriété
      setPokemon(location.state.pokemon);
    } else {
      // Sinon, utilisez directement location.state
      setPokemon(location.state);
    }
  }, [location, location.state]);

  if (!pokemon) { // Vérifie si pokemon est nul ou indéfini et retourne un loader ou un message si c'est le cas
    return <div>Loading...</div>;
  }

  const backgroundStyle = pokemon.types.length > 0 ? typeGradients[pokemon.types[0].name] : "linear-gradient(to up, #fff, #fff)";

  const tabs = [
    { title: "Infos", content: <Info pokemon={pokemon} /> },
    { title: "Stats", content: <Stats stats={pokemon.stats} /> },
    { title: "évolutions", content: <Evo evo={pokemon} /> },
    { title: "Faiblesses", content: <Resi pokemon={pokemon} /> }
  ];

  return (
    <div className="pokemon-page" style={{ backgroundImage: backgroundStyle }}>
      <Link to={'/'}>
        <i className="fa-solid fa-arrow-left arrow"></i>
      </Link>
      <div className='pokemon-page__sprite'>
        <PageSprite
          pokedexId={pokemon.pokedex_id}
          sprites={pokemon.sprites}
          name={pokemon.name}
          types={pokemon.types}
        />
        <Tabs tabs={tabs}/> 
      </div>  
    </div>
  );
};

export default PokemonPage;
