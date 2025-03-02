'use client';
// ConnexionElecteur.js
import React, { useState } from 'react';
import './ConnexionElecteur.css';

const ConnexionElecteur = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
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
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Numéro d'Électeur ou Email</label>
          <input
            type="text"
            name="identifier"
            value={formData.identifier}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default ConnexionElecteur;