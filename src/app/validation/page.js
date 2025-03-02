// ValidationIdentite.js
'use client';
import React, { useState } from 'react';
import './ValidationIdentite.css';

const ValidationIdentite = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    question_securite: '',
    reponse_securite: '',
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
    <div className="validation-identite-container">
      <h2>Validation d'identité</h2>
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
        <div>
          <label>Question de Sécurité</label>
          <select
            name="question_securite"
            value={formData.question_securite}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez une question</option>
            <option value="nom_de_votre_premier_animal">Quel est le nom de votre premier animal de compagnie ?</option>
            <option value="nom_de_jeune_fille_mere">Quel est le nom de jeune fille de votre mère ?</option>
            <option value="premiere_école">Quel est le nom de votre première école ?</option>
            <option value="ville_naissance">Dans quelle ville êtes-vous né(e) ?</option>
          </select>
        </div>
        <div>
          <label>Réponse à la Question de Sécurité</label>
          <input
            type="text"
            name="reponse_securite"
            value={formData.reponse_securite}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default ValidationIdentite;
