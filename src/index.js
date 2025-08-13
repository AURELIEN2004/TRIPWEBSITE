// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Création du root pour React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application
root.render(
    <App />
);

// Mesure des performances (optionnel)
