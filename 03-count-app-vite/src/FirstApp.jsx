// import { Fragment } from 'react';

// export const FirstApp = () => {
//     return (
//         <Fragment>
//             <h1>First App</h1>
//             <p>Hola a todos</p>
//         </Fragment>
//     );
// }
import PropTypes from 'prop-types';

const newMessage = {
    nombre: 'Jesus',
    mensaje: 'Hola a todos'
};

const saludo = () =>{
    const nombre = newMessage.nombre;
    const mensaje = newMessage.mensaje;

    return(
        <>
            <h1>{nombre} <span>Les dice:</span></h1>
            <p><strong>{mensaje}</strong></p>
        </>
    );
}

const getResult = (a, b) => {
    return a + b;
}

export const FirstApp = ( { title, subTitle, name } ) => {
    //console.log( props );
    
    return(
        <>
            <h1 data-testid="test-title"> { title } </h1>
            {/* <h1>{ JSON.stringify(newMessage) }</h1> */}
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
    //title: 'No hay título',
    subTitle: 'No hay subtítulo',
    name: 'Jesus Sanchez'
}

/**
 * instalar react testing library
 * npm install -D @testing-library/react
 */