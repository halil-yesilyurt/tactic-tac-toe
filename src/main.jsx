import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import bgImage from './assets/tic-tac-toe.png';

// Set the background image as a CSS variable
document.documentElement.style.setProperty('--bg-image', `url(${bgImage})`);

createRoot(document.querySelector('body')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
