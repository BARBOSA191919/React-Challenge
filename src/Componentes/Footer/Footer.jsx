import React from 'react';
import logoImg from '../../img/Footer.png'; // Asegúrate de tener la imagen en esta ruta
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <img 
        src={logoImg} 
        alt="AluraFlix" 
        className="footer-logo" 
      />
      <div className="footer-divider"></div>
    </footer>
  );
};

export default Footer;
