import { useLocation } from 'react-router-dom';
import PageSprite from '../../components/PageSprite/PageSprite'
import Info from '../../components/Infos/Infos';
import {typeGradients} from '../../assets/images/colors/colors';
import './_PokemonPage.scss';


const PokemonPage = () => {
  const location = useLocation();
  const { pokemon } = location.state || {};

  const backgroundStyle = pokemon.types.length > 0 ? typeGradients[pokemon.types[0].name] : 'linear-gradient(to up, #fff, #fff)';


  return (
    <div className='pokemon-page' style={{ backgroundImage: backgroundStyle }}>
    <PageSprite
       pokedexId={pokemon.pokedexId}
       sprites={pokemon.sprites}
       name={pokemon.name}
       types={pokemon.types}
    />
    <Info
       pokemon={pokemon}
    /> 
    </div>  
  )
};

export default PokemonPage
