import React from "react";
import { typeColors, darkenColor } from "../../assets/images/colors/colors";
import './Resi.scss'


function resiColor(score){
    if (score === 1) {
        return("1px solid white")       
    }
    if (score < 1 ) {
        return("5px solid rgb(0, 240, 0)")       
    }
    if (score > 1) {
        return("5px solid rgb(240, 0, 0)")       
    } 
    if (score === 0) {
        return("5px solid black")
    }      
}

// Composant Resi
function Resi({ pokemon }) {
    return (
      <div className="resi-back">
        <h2 className="resi__title">Faiblesses</h2>
        <div className="resi">
          {pokemon.resistances.map((resistance, index) => (
            <div key={index} className="resi__list">
              <span 
                className="resi__name" 
                style={{ 
                  backgroundColor: darkenColor(typeColors[resistance.name] || '#000', 10), 
                  border: `${resiColor(resistance.multiplier)}`
                }}
              >
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
