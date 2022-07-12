import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({ value }) => {
    const [ counter, setCounter ] = useState(value);

    const handleAdd = ( f ) => {
        //setCounter( counter + 1 );
        setCounter( (c) => c + 1);
    };
    const handleSub = () => {
        setCounter( counter - 1);
    };
    const handleRst = () => {
        setCounter( value );
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSub }>-1</button>
            <button aria-label='button-reset' onClick={ handleRst }>Reset</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

/**
 * Pruebas a la aplicación
 * instalación de Jest
 *  npm install --save-dev jest
 * agregamos script al package.json
 *  "test":"jest"
 *  ejecutamos el paquete 
 *      npm run test
 * 
 *  Para que este al pendiente de los cambios en el archivo de pruebas
 *      "test": "jest --watchAll"
 * 
 *  Instalamos paquete para intelly Sense
 *  npm install -D @types/jest
 * 
 *  Instalación de dependencias para compatibilidad con javaScript moderno
 *  npm install -D babel-jest @babel/core @babel/preset-env
 */