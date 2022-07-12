import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {fomrState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email   : '',
        password: ''
    });

    //const {username, email, password} = fomrState;

    return (
        <>
            <h1>Formulario con custom Hook</h1>
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
            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={ onInputChange }
            />

            <button onClick={onResetForm} className="form-control btn btn-primary mt-3">Reset</button>

        </>
    );
}