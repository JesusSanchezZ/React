import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { JournalApp } from './JournalApp';
import { store } from './store';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)



/**
 * Preparacíon del proyecto:
 * creación del proyecto: npm create vite
 *  cd "nombre del proyecto"
 *  npm install
 *  ejecución del proyecto: npm run dev  // modo desarrollo
 * 
 * Instalación de React Router
 *  npm install react-router-dom@6       // instala la versión 6 de React router
 * 
 * Instalación de material ui: https://mui.com
 *  npm install @mui/material @emotion/react @emotion/styled
 * Agregar al index.html la fuente Roboto
 *  <link
 *    rel="stylesheet"
 *    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
 *  />
 *  
 * Instalación de iconos
 *  npm install @mui/icons-material
 * 
 * Instalación de Redux Toolkit
 *  npm install @reduxjs/toolkit react-redux
 * 
 * Instalación de 
 */
