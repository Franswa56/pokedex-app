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
      {preEvolutions.length > 0 && (
        <div className="evo__pre">
          <div key={preEvolutions[0].id}>
            <h3 className="evo__name">{preEvolutions[0].name.fr}</h3>
            <img src={preEvolutions[0].sprites.regular} className="evo__image" />
          </div>
          <div className="evo__actual">
            <h3 className="evo__name">{evo.name.fr}</h3>
            <img src={evo.sprites.regular} className="evo__image" />
          </div>
        </div>
      )}
      {preEvolutions.length > 1 && (
        <div className="evo__pre">
          <div key={preEvolutions[1].id}>
            <h3 className="evo__name">{preEvolutions[1].name.fr}</h3>
            <img src={preEvolutions[1].sprites.regular} className="evo__image" />
          </div>
          <div key={preEvolutions[0].id}>
            <h3 className="evo__name">{preEvolutions[0].name.fr}</h3>
            <img src={preEvolutions[0].sprites.regular} className="evo__image" />
          </div>
        </div>
      )}
      {nextEvolutions.length > 0 && (
        <div className="evo__next">
          {preEvolutions.length <= 1 && (
            <div className="evo__actual">
              <h3 className="evo__name">{evo.name.fr}</h3>
              <img src={evo.sprites.regular} className="evo__image" />
            </div>
          )}
          <div key={nextEvolutions[0].id}>
            <h3 className="evo__name">{nextEvolutions[0].name.fr}</h3>
            <img src={nextEvolutions[0].sprites.regular} className="evo__image" />
          </div>
        </div>
      )}
      {nextEvolutions.length > 1 && (
        <div className="evo__next">
          {preEvolutions.length <= 1 && (
            <div key={nextEvolutions[0].id}>
            <h3 className="evo__name">{nextEvolutions[0].name.fr}</h3>
            <img src={nextEvolutions[0].sprites.regular} className="evo__image" />
          </div>
          )}
          <div key={nextEvolutions[1].id}>
            <h3 className="evo__name">{nextEvolutions[1].name.fr}</h3>
            <img src={nextEvolutions[1].sprites.regular} className="evo__image" />
          </div>
        </div>
      )}
    </div>
  );
          }
export default Evo;
