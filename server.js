const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion à MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // change si nécessaire
  database: 'sened_website'
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à MySQL :', err);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

// API pour newsletter
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email requis' });

  const query = 'INSERT INTO newsletter_subscribers (email) VALUES (?)';
  db.query(query, [email], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: 'Cet email est déjà inscrit.' });
      }
      return res.status(500).json({ message: 'Erreur lors de l\'inscription.' });
    }
    res.json({ message: 'Inscription réussie à la newsletter.' });
  });
});

// API pour contact
app.post('/api/contact', (req, res) => {
  const { nom, telephone, message } = req.body;
  if (!nom || !telephone || !message) {
    return res.status(400).json({ message: 'Tous les champs sont requis.' });
  }

  const query = 'INSERT INTO contact_messages (nom, telephone, message) VALUES (?, ?, ?)';
  db.query(query, [nom, telephone, message], (err, result) => {
    if (err) return res.status(500).json({ message: 'Erreur lors de l\'envoi du message.' });
    res.json({ message: 'Message envoyé avec succès.' });
  });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
