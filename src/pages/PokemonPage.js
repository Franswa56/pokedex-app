import { useLocation } from 'react-router-dom';
import PageSprite from '../components/PageSprite/PageSprite'


const PokemonPage = () => {
  const location = useLocation();
  const { pokemon } = location.state || {};
  return (
    <>
    <PageSprite
       pokedexId={pokemon.pokedexId}
       sprites={pokemon.sprites}
       name={pokemon.name}
       types={pokemon.types}
    /> 
    </>  
  )
};

export default PokemonPage
