import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// BELOW IT IS LIBRARY FROM BOOTSTRAP FRAMEWORK 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
