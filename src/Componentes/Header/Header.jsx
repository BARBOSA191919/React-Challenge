import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../img/Nav bar.png'; // Asegúrate de tener la imagen en esta ruta
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="navbar">
      <img src={logoImg} alt="AluraFlix" className="navbar-image" />
      <nav className="navbar-buttons">
        <Link
          to="/"
          className={`button ${
            location.pathname === '/' ? 'button-home-active' : 'button-home'
          }`}
        >
          HOME
        </Link>
        <Link
          to="/nuevo-video"
          className={`button ${
            location.pathname === '/nuevo-video' ? 'button-video-active' : 'button-video'
          }`}
        >
          NUEVO VIDEO
        </Link>
      </nav>
    </header>
  );
};

export default Header;
