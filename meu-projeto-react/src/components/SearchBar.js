import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <span className="menu-icon">☰</span>
      <input 
        type="text" 
        className="search-input" 
        placeholder="Comece a procurar..." 
      />
      <span className="search-icon">🔍</span>
    </div>
  );
}

export default SearchBar;
