import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" aria-label="Présentation de AMS (Art Multi Service)">
      <div className="hero-content">
        <h1>
          Bienvenue chez <span className="highlight">AMS (Art Multi Services)</span>
        </h1>
        <p>
          Vous cherchez des réparations mobiles fiables ? AMS est votre expert à Thiès, Cité Lamy ! Nous réparons moteurs,
          écrans, systèmes, périphériques et bien plus encore. Découvrez aussi notre large gamme de gadgets mobiles et de services
          d'infographie : création de logos, cartes de visite, optimisation d'images et plus encore.
        </p>
        <a href="#produits" className="hero-button">
          Découvrez nos produits et services
        </a>
      </div>
    </section>
  );
}

export default Hero;
