import React from 'react';
import './Team.css';

import member1 from '../imgs/son.jpg';
import member2 from '../imgs/ndeye.jpg';
import member3 from '../imgs/issa.jpg';

function Team() {
  return (
    <section id="team" className="team-section">
      <h2>Notre Équipe</h2>
      <div className="team-members">
        <div className="team-card">
          <img src={member1} alt="Djiby SENE" />
          <h3>Djiby SENE</h3>
          <p>Directeur Général AMS</p>
        </div>
        
        <div className="team-card">
          <img src={member2} alt="Ndeye DIAKHATE" />
          <h3>Ndeye DIAKHATE</h3>
          <p>Assistante & Responsable technique</p>
          <a 
            href="https://wa.me/221765912513?text=Bonjour%20Ndeye,%20j'aimerais%20avoir%20des%20informations%20sur%20vos%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            💬 Contacter via WhatsApp
          </a>
        </div>
        
        <div className="team-card">
          <img src={member3} alt="Issa KAMARA" />
          <h3>Issa KAMARA</h3>
          <p>Gestionnaire informatique & Digital Marketing</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
