import React from 'react';
import './Gallery.css';

import gadget from '../imgs/gadget.jpg';
import artcut from '../imgs/cut.jpg';
import informatiq from '../imgs/informatik.jpg.jpg';
import call from '../imgs/call.jpg';

import gadget2 from '../imgs/graph.jpg';
import artcut2 from '../imgs/cut-baniere.jpg';
import informatiq2 from '../imgs/artCut-baniere.jpg';
import call2 from '../imgs/tel-baniere.jpg';

function Gallery() {
  const images = [
    { src: gadget, alt: 'Gadget 1' },
    { src: artcut, alt: 'Flocage' },
    { src: informatiq, alt: 'Découpe' },
    { src: call, alt: 'T-shirt' },
    { src: gadget2, alt: 'Gadget 2' },
    { src: artcut2, alt: 'Flocage 2' },
    { src: informatiq2, alt: 'Découpe 2' },
    { src: call2, alt: 'T-shirt 2' },
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>Galerie</h2>
      <div className="gallery-grid">
        {images.map(({ src, alt }, index) => (
          <img
            key={index}
            src={src}
            alt={alt}
            className="gallery-img"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
