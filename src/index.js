import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SupportAdmin from './SupportAdmin';

const path = window.location.pathname

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
ReactDOM.render(
  <React.StrictMode>
    { path.indexOf('/support') === -1 ? <App /> : <SupportAdmin /> }
  </React.StrictMode>,
  document.getElementById('root')
);
