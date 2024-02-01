import './_Header.scss'
import pokeballLogo from '../../assets/images/pokeballBlack.webp'

function Header(){
    return (
        <div className="header">
            <h1 className="header__title">Pokédex</h1>
            <img className='header__logo' src= {pokeballLogo}></img>

        </div>
    )
}
export default Header