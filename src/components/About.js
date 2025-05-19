import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>À Propos d'AMS (Art Multi-Services)</h2>
      
      <p className="about-text">
        AMS (Art Multi-Services) est une entreprise dynamique spécialisée dans plusieurs domaines créatifs et technologiques. 
        Nous achetons et vendons des accessoires smartphone de qualité, offrant ainsi une large gamme de produits adaptés à tous vos besoins mobiles.
      </p>
      
      <p className="about-text">
        En plus de cela, nous proposons des services de **flockage personnalisé** sur t-shirts, maillots, et autres textiles, pour tous types d'événements, d'entreprises ou de projets personnels. 
        Que ce soit pour des tenues d'équipe, des cadeaux ou des créations uniques, nous avons l'expertise pour transformer vos idées en réalité.
      </p>

      <p className="about-text">
        Nous sommes également spécialisés dans la **création graphique**, de la conception de logos, cartes de visite, affiches publicitaires et bien plus encore. 
        Nous utilisons des outils professionnels comme **Adobe**, **Canva**, et **ArtCut** pour garantir des créations de qualité qui répondent à vos besoins spécifiques.
      </p>

      <p className="about-text">
        Notre siège est situé à **Cité Lamy, Guelewar**, avenue du rond-point de l'Hôpital Régional, sur la petite route pavée, juste en face du fast-food **Le Carrefour du Délice**. 
        Nous vous invitons à venir découvrir nos services et nous rencontrer pour discuter de vos projets créatifs.
      </p>
    </section>
  );
}

export default About;
