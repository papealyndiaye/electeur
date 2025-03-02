'use client';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ConnexionElecteur from './connexion/page';
import InscriptionElecteur from './inscription/page';
import ValidationIdentite from './validation/page'; // Check this path

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <header className="App-header">
          <nav className="navbar">
            <ul className="navbar-links">
            <li>
                <Link to="/" className="navbar-link">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/inscription" className="navbar-link">
                  Inscription
                </Link>
              </li>
              <li>
                <Link to="/connexion" className="navbar-link">
                  Connexion
                </Link>
              </li>
              <li>
                <Link to="/validation" className="navbar-link">
                  Validation d'identité
                </Link>
              </li>
            </ul>
          </nav>
          <p>Bonjour cher citoyen</p>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/inscription" element={<InscriptionElecteur />} />
            <Route path="/connexion" element={<ConnexionElecteur />} />
            <Route path="/validation" element={<ValidationIdentite />} />
            <Route path="/" element={<h2>Bienvenue à l'application de gestion du compte électeur</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
