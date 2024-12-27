import React from 'react';
import './Banner.css';
import bannerImage from '../../img/BannerMain.png'; // Asegúrate de usar la ruta correcta
import player from '../../img/player.png';

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Challenge React" className="banner-image" />
      <img src={player} alt="Player React" className="player-image" />

      <div className="banner-content">
        <div className="banner-tag">FRONT END</div>
        <h1 className="banner-title">Challenge React</h1>
        <p className="banner-description">
          Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
        </p>
      </div>
    </div>
  );
};

export default Banner;
