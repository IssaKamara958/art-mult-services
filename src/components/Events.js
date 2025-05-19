import React from 'react';
import './Events.css';

function Events() {
  return (
    <section id="events" className="events-section">
      <h2>Nos Événements</h2>
      <p>Voici les derniers événements organisés ou à venir chez AMS (Art Multi-Services).</p>
      <ul className="event-list">
        <li>
          <h3>Atelier Pratique de Maintenance Smartphone – Juin 2025</h3>
          <p>Un atelier pratique pour apprendre à diagnostiquer et réparer des problèmes courants sur vos smartphones. Les participants découvriront également les meilleures pratiques en matière de sécurité numérique.</p>
        </li>
        <li>
          <h3>Journée Portes Ouvertes de Flockage et Création Graphique – Août 2025</h3>
          <p>Venez découvrir le processus de personnalisation de t-shirts, maillots, et autres accessoires avec notre service de flockage. Profitez également d'une démonstration de création graphique avec des outils comme Adobe et Canva.</p>
        </li>
        <li>
          <h3>Exposition de Confections Graphiques et Accessoires Smartphone – Septembre 2025</h3>
          <p>Une exposition mettant en avant nos créations graphiques (logos, cartes de visite, affiches) ainsi que notre large gamme d'accessoires pour smartphones. Venez découvrir nos services et produits uniques !</p>
        </li>
        <li>
          <h3>Séminaire sur la Sécurité Numérique – Novembre 2025</h3>
          <p>Participez à notre séminaire pour découvrir les meilleures pratiques en matière de sécurité numérique, la gestion des données sensibles, et comment protéger votre smartphone contre les virus et les cyberattaques.</p>
        </li>
      </ul>
    </section>
  );
}

export default Events;
