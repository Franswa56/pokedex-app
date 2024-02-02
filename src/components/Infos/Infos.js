import "./_Infos.scss";

function Info({ pokemon }) {
  const regions = ["kanto", "johto", "hoenn", "sinnoh", "unys", "kalos", "alola", "galar", "paldea"];

  const pokeRegion = regions[pokemon.generation - 1];

  return (
    <div className="infos">
        <h1 className="infos__desc">{pokemon.category}</h1>
      <div className="infos__container">
        <div className="infos__talents">
          <h3 className="infos__talents-title">Talents</h3>
          <ul className="infos__talents-list">
            {pokemon.talents.map((talent, index) => (
              <li key={index} className="infos__talents-text">
                {talent.name} {talent.tc ? "(TC)" : ""}
              </li>
            ))}
          </ul>
        </div>
        <div className="infos__capture">
          <h3 className="infos__capture-title">Taux de capture</h3>
          <h4 className="infos__capture-text">{pokemon.catch_rate}</h4>
        </div>
      </div>
      <div className="infos__container">
        <div className="infos__title">
          <h3>Taille</h3>
          <h4>
            {pokemon.height} <i class="fa-solid fa-arrows-up-down"></i>
          </h4>
        </div>
        <div className="infos__title">
          <h3>Poids</h3>
          <h4>
            {pokemon.weight} <i class="fa-solid fa-weight-hanging"></i>
          </h4>
        </div>
        <div className="infos__title">
          <h3>Sexe</h3>
          <h4>
            {pokemon.sexe.male} <i class="fa-solid fa-mars"></i>
          </h4>
          <h4>
            {pokemon.sexe.female} <i class="fa-solid fa-venus"></i>
          </h4>
        </div>
        <div className="infos__title">
          <h3>Région</h3>
          <h4>
            {pokeRegion} <i class="fa-solid fa-map-location-dot"></i>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Info;
