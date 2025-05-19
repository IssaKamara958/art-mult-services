import React, { useEffect, useState } from 'react';
import './Header.css';

import logoImg from '../imgs/logo.png';
import banner1 from '../imgs/artCut-baniere.jpg';
import banner2 from '../imgs/cut-baniere.jpg';
import banner3 from '../imgs/tel-baniere.jpg';

function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
      setMenuOpen(false); // Ferme le menu lors du scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolling ? 'hide-banner' : ''}`}>
      <div className="header-container">
        <a href="/" className="logo-link">
          <img src={logoImg} alt="AMS Logo" className="logo-img" />
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>A Propos</a>
          <a href="#atelier" className="nav-link" onClick={() => setMenuOpen(false)}>Atelier</a>
          <a href="#team" className="nav-link" onClick={() => setMenuOpen(false)}>Equipe</a>
          <a href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#gallery" className="nav-link" onClick={() => setMenuOpen(false)}>Galerie</a>
          <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#events" className="nav-link" onClick={() => setMenuOpen(false)}>Événements</a>
          <a href="#partners" className="nav-link" onClick={() => setMenuOpen(false)}>Partenaires</a>
          <a href="#newsletter" className="nav-link" onClick={() => setMenuOpen(false)}>Newsletter</a>
        </nav>
      </div>

      <div className="carousel">
        <div className="carousel-track">
          <img src={banner1} alt="AMS Banner 1" className="carousel-img" />
          <img src={banner2} alt="AMS Banner 2" className="carousel-img" />
          <img src={banner3} alt="AMS Banner 3" className="carousel-img" />
        </div>
      </div>
    </header>
  );
}

export default Header;
