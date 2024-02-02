import React from 'react';
import './_PokemonCard.scss'
import pokeballImage from '../../assets/images/pokeball.svg'
import { Link } from 'react-router-dom';
import {typeColors, typeGradients} from '../../assets/images/colors/colors';

   const PokemonCard = ({ name, image, types, pokedexId, pokemon }) => {
    const backgroundStyle = types.length > 0 ? typeGradients[types[0].name] : 'linear-gradient(to right, #fff, #fff)';
  
    return (
      <>
      <Link to={`/pokemon/${pokedexId}`} state={{ pokemon }}>
      <div className="pokemon-card" style={{ backgroundImage: backgroundStyle }}>
        <img src={image} alt={name} className="pokemon-card__image"/>
        <img src={pokeballImage} alt='pokeball' className='pokemon-card__logo'/>
        <p className='pokemon-card__id'># {pokedexId}</p>
        <h2 className="pokemon-card__name">{name}</h2>
        <ul className='pokemon-card__types'>
          {types.map((type, index) => (
            <li key={index} className='pokemon-card__type' style={{ backgroundColor: typeColors[type.name] }}>
              {type.name}
            </li>
          ))}
        </ul>
      </div>
      </Link>
      </>
    );
  };

export default PokemonCard;