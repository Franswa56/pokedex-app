import React from 'react';
import './_SearchBar.scss'

const SearchBar = ({ onSearchChange }) => {
  return (
    <div className='search-bar'>

    <i class="fa-solid fa-magnifying-glass search-bar__logo"></i>
    <input
      className='search-bar__input'
      type="text"
      placeholder="Rechercher un Pokémon..."
      onChange={(event) => onSearchChange(event.target.value)}
    />
    </div>
  );
};

export default SearchBar;