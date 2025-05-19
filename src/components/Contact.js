import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ nom: '', telephone: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Garde uniquement cette version
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);

      // Ouverture WhatsApp
      const message = `📩 Nouveau message de ${form.nom} (${form.telephone}) :\n${form.message}`;
      const whatsappUrl = `https://wa.me/221777572407?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      setForm({ nom: '', telephone: '', message: '' });
    } catch (error) {
      alert("Erreur lors de l'envoi du message.");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p><strong>Lieu :</strong> Cité Lamy, Thiès</p>
      <p><strong>Téléphone :</strong> 77 757 24 07</p>
      <p><strong>Email :</strong> sened2455@gmail.com</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nom"
          value={form.nom}
          onChange={handleChange}
          placeholder="Nom"
          required
        />
        <input
          type="tel"
          name="telephone"
          value={form.telephone}
          onChange={handleChange}
          placeholder="Téléphone"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Votre message"
          required
        ></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
