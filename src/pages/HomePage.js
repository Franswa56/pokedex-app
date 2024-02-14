import PokemonGrid from "../components/PokemonGrid/PokemonGrid";
import Header from "../components/Header/Header";
import './_Hompage.scss'


function HomePage() {
    return (
      <div className="home">
        <Header/>
        <main>
          <PokemonGrid/>
        </main>
        <footer>
          {/* Pied de page de l'application */}
        </footer>
      </div>
    );
  }

  export default HomePage