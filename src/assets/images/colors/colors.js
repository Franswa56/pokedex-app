export const typeColors = {
    Insecte: '#A8B820', // Vert Olive
    Feu: '#F08030', // Orange
    Eau: '#6890F0', // Bleu Clair
    Plante: '#78C850', // Vert Clair
    Poison: '#A040A0', // Violet
    Électrik: '#F8D030', // Jaune
    Sol: '#E0C068', // Marron Clair
    Vol: '#A890F0', // Bleu Pâle
    Psy: '#F85888', // Rose
    Combat: '#C03028', // Rouge Marron
    Roche: '#B8A038', // Or
    Glace: '#98D8D8', // Cyan Clair
    Spectre: '#705898', // Violet Foncé
    Dragon: '#7038F8', // Bleu Royal
    Ténèbres: '#705848', // Noir Marron
    Acier: '#B8B8D0', // Gris Clair
    Fée: '#EE99AC', // Rose Clair
    Normal: '#A8A878', // Kaki
  };

  export const typeGradients = {
    Insecte: 'linear-gradient(to right, #92BC2C, #AFC836)',
    Feu: 'linear-gradient(to right, #FBA54C, #FC7F4B)',
    Eau: 'linear-gradient(to right, #539DDF, #4D91C6)',
    Plante: 'linear-gradient(to top, #5FBD58, #5AC178)',
    Poison: 'linear-gradient(to right, #9B69D9, #A768D9)',
    Électrik: 'linear-gradient(to right, #EDD53E, #FBE273)',
    Sol: 'linear-gradient(to right, #F78551, #E5704D)',
    Vol: 'linear-gradient(to right, #A1BBEC, #92B9F6)',
    Psy: 'linear-gradient(to right, #FA8581, #FF669C)',
    Combat: 'linear-gradient(to right, #D3425F, #E87060)',
    Roche: 'linear-gradient(to right, #C9BB8A, #D7CC9B)',
    Glace: 'linear-gradient(to right, #75D0C1, #9AE0DD)',
    Spectre: 'linear-gradient(to right, #516AAC, #7773D4)',
    Dragon: 'linear-gradient(to right, #0C6AC8, #3994F1)',
    Ténèbres: 'linear-gradient(to right, #595761, #6E7587)',
    Acier: 'linear-gradient(to right, #417D9A, #4B91C2)',
    Fée: 'linear-gradient(to right, #EC8CE5, #F3A7E7)',
    Normal: 'linear-gradient(to right, #9298A4, #A3A49E)',
  };

  export function darkenColor(colorHex, percent) {
    // Convertit hex en RGB
    let r = parseInt(colorHex.substring(1, 3), 16);
    let g = parseInt(colorHex.substring(3, 5), 16);
    let b = parseInt(colorHex.substring(5, 7), 16);
    // Calcule la nouvelle valeur de chaque composant
    r = parseInt(r * (100 - percent) / 100);
    g = parseInt(g * (100 - percent) / 100);
    b = parseInt(b * (100 - percent) / 100);
    // Convertit les nouvelles valeurs RGB en hex
    r = r.toString(16).padStart(2, '0');
    g = g.toString(16).padStart(2, '0');
    b = b.toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }