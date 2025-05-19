import React from 'react';
import './Partners.css';

// Import des images partenaires
import ChackorOrg from '../imgs/ch-logo.jpg';
import AS from '../imgs/as.jpg';
import KIA from '../imgs/kia.jpg';

function Partners() {
  const partners = [
    { src: ChackorOrg, alt: 'Chackor Organisation' },
    { src: AS, alt: 'A.S by Seydina' },
    { src: KIA, alt: 'KIA Création' },
  ];

  return (
    <section id="partners" className="partners-section">
      <h2>Nos Partenaires</h2>
      <div className="partners-logos">
        {partners.map(({ src, alt }, index) => (
          <img
            key={index}
            src={src}
            alt={alt}
            className="partner-logo"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}

export default Partners;
