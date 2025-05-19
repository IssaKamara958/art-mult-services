import React, { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      alert(data.message);
      setEmail('');
      setSubmitted(true);
    } catch (error) {
      alert("Erreur lors de l'inscription à la newsletter.");
      console.error(error);
    }
  };

  return (
    <section id="newsletter" className="newsletter-section">
      <h2>Inscrivez-vous à notre newsletter</h2>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Entrez votre adresse email"
          required
        />
        <button type="submit">S'inscrire</button>
      </form>
      {submitted && <p className="success-message">Merci pour votre inscription !</p>}
    </section>
  );
}

export default Newsletter;
