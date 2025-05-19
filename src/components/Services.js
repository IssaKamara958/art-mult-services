import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      icon: '📱',
      title: 'Réparation & vente de gadgets mobiles',
    },
    {
      icon: '🎨',
      title: 'Infographie personnalisée',
    },
    {
      icon: '🖨️',
      title: 'Flocage & Découpe (ArtCut, SureCut)',
    },
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Nos Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-box">
            <span className="service-icon">{service.icon}</span>
            <p className="service-text">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
