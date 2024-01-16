// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './Routes';  // Certifique-se de que o caminho está correto
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />  {/* Certifique-se de chamar a função AppRouter, que envolve as rotas */}
  </React.StrictMode>,
);

reportWebVitals();
