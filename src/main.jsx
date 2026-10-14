import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import './styles/responsive.css';
import App from './App.jsx';

// Determine correct router basename for development vs GitHub Pages production
const routerBasename = import.meta.env.PROD ? '/Ananthagiri-Hills' : '/';

createRoot(getElementByIdOrFallback('root')).render(
  <StrictMode>
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

function getElementByIdOrFallback(id) {
  return document.getElementById(id);
}