// InscriptionElecteur.js
'use client';
import React, { useState } from 'react';
import './InscriptionElecteur.css';

const InscriptionElecteur = () => {
  const [formData, setFormData] = useState({
    username: '',
    prenom: '',
    nom: '',
    date_naissance: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ajoute ici la logique pour envoyer les données au serveur
  };

  return (
    <div className="signup-container">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Numéro d'Électeur</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Prénom</label>
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nom</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date de Naissance</label>
          <input
            type="date"
            name="date_naissance"
            value={formData.date_naissance}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default InscriptionElecteur;

