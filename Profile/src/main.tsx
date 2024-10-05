import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Adjust this import path if necessary

// Import your global styles
import './index.css'; // Make sure this path is correct

// If you have any other global style imports, include them here
// import './other-global-styles.css';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);