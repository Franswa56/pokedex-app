import {typeColors} from '../../assets/images/colors/colors';
import "./_PageSprite.scss"
import pokeball from '../../assets/images/demiPokeball.webp'
import shadow from '../../assets/images/shadow.png'

function PageSprite({pokedexId, name,types,sprites}) {

    

    return (
    <div className='pokepage' >       
        <div className='pokepage__info'>
            <h3 className='pokepage__info-id'># {pokedexId}</h3>
            <h1 className='pokepage__info-name'>{name.fr}</h1>
            <div className='pokepage__info-types'>
            {types.map((type, index) => (
            <li key={index} className='pokepage__info-type' style={{ backgroundColor: typeColors[type.name] }}>
              {type.name}
            </li>))}
            </div>
        </div>
        <img src={pokeball} className='pokepage__pokeball'></img>
        <img className='pokepage__image' src={sprites.regular} ></img>
        <img src={shadow} className='pokepage__shadow'></img>
    </div>

)}

export default PageSprite