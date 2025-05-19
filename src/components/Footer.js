import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} <strong>AMS</strong> (Art Mult Services) – Tous droits réservés.
        </p>
        <ul className="footer-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#partners">Partenaires</a></li>
          <li><a href="#gallery">Galerie</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
