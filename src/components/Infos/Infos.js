import "./_Infos.scss";

function Info({ pokemon }) {
  return (
    <div className="infos">
      <div className="infos__container">
        <div className="infos__title">
          <h3>Taille</h3>
          <h4>{pokemon.height} <i class="fa-solid fa-arrows-up-down"></i></h4>
        </div>
        <div className="infos__title">
          <h3>Poids</h3>
          <h4>{pokemon.weight} <i class="fa-solid fa-weight-hanging"></i></h4>
        </div>
      </div>
    </div>
  );
}

export default Info;
