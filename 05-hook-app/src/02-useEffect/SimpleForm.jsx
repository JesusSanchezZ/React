import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [fomrState, setFormState] = useState({
        username: 'strider',
        email: 'chuwaka2500@gmail.com'
    });

    const { username, email } = fomrState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...fomrState,
            [ name ]: value
        })
    }

    useEffect(()=>{
        //console.log('useEffect called');
    },[]);

    useEffect(()=>{
        //console.log('formState changed');
    },[fomrState]);

    useEffect(()=>{
        //console.log('email changed');
    },[email]);

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={ onInputChange }
            />
            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="ejemplo@ejemplo.eje"
                name="email"
                value={email}
                onChange={ onInputChange }
            />

            {
                (username === 'strider2') && <Message/>
            }
        </>
    );
}