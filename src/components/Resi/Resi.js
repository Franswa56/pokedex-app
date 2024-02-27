import React from "react";
import { typeColors } from "../../assets/images/colors/colors";
import './Resi.scss'

// Composant Resi
function Resi({ pokemon }) {
  return (
    <div>
      <h2 className="resi__title">Faiblesses</h2>
      <div className="resi">
        {pokemon.resistances.map((resistance, index) => (
          <div key={index} className="resi__list">
            <span className="resi__name" style={{ backgroundColor: typeColors[resistance.name] || "#000" }}>
              {resistance.name}
              <span className="resi__score">{resistance.multiplier}x</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resi;
