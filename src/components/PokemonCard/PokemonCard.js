import React from 'react';
import './_PokemonCard.scss'

const typeColors = {
    Insecte: '#A8B820', // Vert Olive
    Feu: '#F08030', // Orange
    Eau: '#6890F0', // Bleu Clair
    Plante: '#78C850', // Vert Clair
    Poison: '#A040A0', // Violet
    Électrik: '#F8D030', // Jaune
    Sol: '#E0C068', // Marron Clair
    Vol: '#A890F0', // Bleu Pâle
    Psy: '#F85888', // Rose
    Combat: '#C03028', // Rouge Marron
    Roche: '#B8A038', // Or
    Glace: '#98D8D8', // Cyan Clair
    Spectre: '#705898', // Violet Foncé
    Dragon: '#7038F8', // Bleu Royal
    Ténèbres: '#705848', // Noir Marron
    Acier: '#B8B8D0', // Gris Clair
    Fée: '#EE99AC', // Rose Clair
    Normal: '#A8A878', // Kaki
  };

  const typeGradients = {
    Insecte: 'linear-gradient(to right, #92BC2C, #AFC836)',
    Feu: 'linear-gradient(to right, #FBA54C, #FC7F4B)',
    Eau: 'linear-gradient(to right, #539DDF, #4D91C6)',
    Plante: 'linear-gradient(to right, #5FBD58, #5AC178)',
    Poison: 'linear-gradient(to right, #9B69D9, #A768D9)',
    Électrik: 'linear-gradient(to right, #EDD53E, #FBE273)',
    Sol: 'linear-gradient(to right, #F78551, #E5704D)',
    Vol: 'linear-gradient(to right, #A1BBEC, #92B9F6)',
    Psy: 'linear-gradient(to right, #FA8581, #FF669C)',
    Combat: 'linear-gradient(to right, #D3425F, #E87060)',
    Roche: 'linear-gradient(to right, #C9BB8A, #D7CC9B)',
    Glace: 'linear-gradient(to right, #75D0C1, #9AE0DD)',
    Spectre: 'linear-gradient(to right, #516AAC, #7773D4)',
    Dragon: 'linear-gradient(to right, #0C6AC8, #3994F1)',
    Ténèbres: 'linear-gradient(to right, #595761, #6E7587)',
    Acier: 'linear-gradient(to right, #417D9A, #4B91C2)',
    Fée: 'linear-gradient(to right, #EC8CE5, #F3A7E7)',
    Normal: 'linear-gradient(to right, #9298A4, #A3A49E)',
  };
  

  const PokemonCard = ({ name, image, types }) => {
    const backgroundStyle = types.length > 0 ? typeGradients[types[0].name] : 'linear-gradient(to right, #fff, #fff)';
  
    return (
      <div className="pokemon-card" style={{ backgroundImage: backgroundStyle }}>
        <img src={image} alt={name} className="pokemon-card__image"/>
        <h2 className="pokemon-card__name">{name}</h2>
        <ul className='pokemon-card__types'>
          {types.map((type, index) => (
            <li key={index} className='pokemon-card__type' style={{ backgroundColor: typeColors[type.name] }}>
              {type.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default PokemonCard;