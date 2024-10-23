import React from 'react';
import ReactDOM from 'react-dom/client';
import './Components/Note/styles.module.css';  // Upewnij się, że ścieżka do pliku CSS jest poprawna
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


