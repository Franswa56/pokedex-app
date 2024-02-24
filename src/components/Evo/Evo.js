import "./Evo.scss";
import React, { useEffect, useState } from "react";
import { fetchPoke } from "../../api/PokemonAPI";

const Evo = ({ evo }) => {
  const [preEvolutions, setPreEvolutions] = useState([]);
  const [nextEvolutions, setNextEvolutions] = useState([]);

  useEffect(() => {
    // Ne procédez que si evo.evolution n'est pas null
    if (evo.evolution) {
      const fetchPreEvolutions = async () => {
        const preEvos = await Promise.all(
          (evo.evolution.pre ?? []).map(pre => fetchPoke(pre.pokedexId))
        );
        setPreEvolutions(preEvos.filter(Boolean));
      };
  
      const fetchNextEvolutions = async () => {
        const nextEvos = await Promise.all(
          (evo.evolution.next ?? []).map(next => fetchPoke(next.pokedexId))
        );
        setNextEvolutions(nextEvos.filter(Boolean));
      };
  
      fetchPreEvolutions();
      fetchNextEvolutions();
    } else {
      // Réinitialiser les états si evo.evolution est null
      setPreEvolutions([]);
      setNextEvolutions([]);
    }
  }, [evo]);

  return (
    <div className="evo">
      {evo.evolution && (
        <>
          {/* Logique pour les pré-évolutions (identique à votre code actuel) */}
          {preEvolutions.length > 0 && (
            <div className="evo__pre">
              <div key={preEvolutions[preEvolutions.length - 1].id}>
                <h3 className="evo__name">{preEvolutions[preEvolutions.length - 1].name.fr}</h3>
                <img src={preEvolutions[preEvolutions.length - 1].sprites.regular} className="evo__image" />
              </div>
              <div className="evo__actual">
                <h3 className="evo__name">{evo.name.fr}</h3>
                <img src={evo.sprites.regular} className="evo__image" />
              </div>
            </div>
          )}
  
          {preEvolutions.length > 1 && (
            <div className="evo__pre">
              <div key={preEvolutions[0].id}>
                <h3 className="evo__name">{preEvolutions[0].name.fr}</h3>
                <img src={preEvolutions[0].sprites.regular} className="evo__image" />
              </div>
              <div key={preEvolutions[preEvolutions.length - 1].id}>
                <h3 className="evo__name">{preEvolutions[preEvolutions.length - 1].name.fr}</h3>
                <img src={preEvolutions[preEvolutions.length - 1].sprites.regular} className="evo__image" />
              </div>
            </div>
          )}
  
          {/* Logique adaptée pour les prochaines évolutions */}
          {nextEvolutions.length > 0 && (
            <div className="evo__next">
              <div className="evo__actual">
                <h3 className="evo__name">{evo.name.fr}</h3>
                <img src={evo.sprites.regular} className="evo__image" />
              </div>
              <div key={nextEvolutions[0].id}>
                <h3 className="evo__name">{nextEvolutions[0].name.fr}</h3>
                <img src={nextEvolutions[0].sprites.regular} className="evo__image" />
              </div>
            </div>
          )}
  
          {nextEvolutions.length > 1 && (
            <div className="evo__next">
              <div key={nextEvolutions[0].id}>
                <h3 className="evo__name">{nextEvolutions[0].name.fr}</h3>
                <img src={nextEvolutions[0].sprites.regular} className="evo__image" />
              </div>
              <div key={nextEvolutions[1].id}>
                <h3 className="evo__name">{nextEvolutions[1].name.fr}</h3>
                <img src={nextEvolutions[1].sprites.regular} className="evo__image" />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
          }
export default Evo;
