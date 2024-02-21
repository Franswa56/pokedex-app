import { useLocation } from 'react-router-dom';
import PageSprite from '../../components/PageSprite/PageSprite'
import Info from '../../components/Infos/Infos';
import {typeGradients} from '../../assets/images/colors/colors';
import './_PokemonPage.scss';
import Tabs from '../../components/Tabs/Tabs';
import Stats from '../../components/Stats/Stats';
import { Link } from 'react-router-dom';

const PokemonPage = () => {
  const location = useLocation();
  const { pokemon } = location.state || {};

  const backgroundStyle = pokemon.types.length > 0 ? typeGradients[pokemon.types[0].name] : 'linear-gradient(to up, #fff, #fff)';

  const tabs = [
    { title: 'Infos', content: <Info pokemon={pokemon}/> },
    { title: 'Stats', content: <Stats stats={pokemon.stats} />}
  ]

  return (
    <div className='pokemon-page' style={{ backgroundImage: backgroundStyle }}>
      <Link to={'/'}>
      <i class="fa-solid fa-arrow-left arrow"></i>
      </Link>
    <PageSprite
       pokedexId={pokemon.pokedexId}
       sprites={pokemon.sprites}
       name={pokemon.name}
       types={pokemon.types}
    />
    <Tabs tabs={tabs}/> 
    </div>  
  )
};

export default PokemonPage
