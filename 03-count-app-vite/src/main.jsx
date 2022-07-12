import React from "react";
import ReactDOM from "react-dom/client";
//import { HelloWorldApp } from './HelloWorldApp';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';

import './styles.css';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={ Math.round(Math.random() * 300 - 150) } />
        {/* <FirstApp title="Hola, soy yo"></FirstApp> */}
    </React.StrictMode>
);


/**
 * Creación de aplicación react con vite
 * npm create vite
 * --> npm install
 *      npm run dev
 */