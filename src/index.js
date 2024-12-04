import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Custom CSS for global styling
import App from './App'; // Main app component
import reportWebVitals from './reportWebVitals'; // For measuring performance

// Create root and render the app wrapped in React.StrictMode
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// To measure performance in your app
reportWebVitals();
