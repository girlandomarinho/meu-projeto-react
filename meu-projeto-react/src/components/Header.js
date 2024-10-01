import React from 'react';
import SearchBar from './SearchBar'; // Certifique-se de que o caminho está correto

function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* URL da imagem externa */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Marca-da-UEPB-Aplica%C3%A7%C3%A3o-Colorida-em-PNG-1.png" alt="Logo da Universidade" />
      </div>
      <SearchBar />
      <div className="header-buttons">
        <button className="contact-btn">Fale Conosco</button>
        <button className="account-btn">Minha Conta</button>
        <span className="notification-icon">🔔</span>
      </div>
    </header>
  );
}

export default Header;
