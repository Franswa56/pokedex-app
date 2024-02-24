import "./Evo.scss";
import React, { useEffect, useState } from "react";
import { fetchPoke } from "../../api/PokemonAPI";

const Evo = ({ evo }) => {
  const [preEvolutions, setPreEvolutions] = useState([]);
  const [nextEvolutions, setNextEvolutions] = useState([]);

  useEffect(() => {
    // Assurez-vous que pre et next sont des tableaux avant d'utiliser forEach
    (evo.evolution.pre ?? []).forEach(async (pre) => {
      const data = await fetchPoke(pre.pokedexId);
      if (data) setPreEvolutions((prev) => [...prev, data]);
      console.log(evo);
    });

    (evo.evolution.next ?? []).forEach(async (next) => {
      const data = await fetchPoke(next.pokedexId);
      if (data) setNextEvolutions((prev) => [...prev, data]);
    });
  }, [evo]);

  return (
    <div className="evo">
      <div className="evo__pre">
        {preEvolutions.map((poke) => (
          <div key={poke.id}>
            <h3 className="evo__name">{poke.name.fr}</h3>
            <img src={poke.sprites.regular} className="evo__image"></img>
          </div>
        ))}
      </div>
      <div className="evo__actual">
        <h3 className="evo__name">{evo.name.fr}</h3>
        <img src={evo.sprites.regular} className="evo__image"></img>
      </div>
      <div className="evo__next">
      {nextEvolutions.map((poke) => (
        <div key={poke.id}>
          <h3 className="evo__name">{poke.name.fr}</h3>
          <img src={poke.sprites.regular} className="evo__image"></img>
          </div>
      ))}
      </div>
    </div>
  );
};

export default Evo;
