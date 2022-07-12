import { useRef } from "react";

export const FocusScreen = () => {
    const inputNombre =  useRef();
    const inputApellido = useRef();
    const inputMail = useRef();
    //console.log(ref);

    const onClick1 = () =>{
        //document.querySelector('input').select();
        //console.log(event);
        inputNombre.current.select();
    }
    const onClick2 = () => {
        inputApellido.current.select();
    }
    const onClick3 = () => {
        inputMail.current.select();
    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputNombre} 
                className="form-control"
                type="text"
                placeholder="Ingrese su nombre"
                name="nombre"
            />
            <input 
                ref={inputApellido}
                className="form-control mt-1"
                type="text"
                placeholder="Ingrese su nombre"
                name="apellido"
            />
            <input 
                ref={inputMail}
                className="form-control mt-1"
                type="text"
                placeholder="Ingrese su nombre"
                name="email"
            />

            <button onClick={ onClick1 } className="btn btn-primary form-control mt-3">
                Set focus1
            </button>
            <button onClick={ onClick2 } className="btn btn-primary form-control mt-3">
                Set focus2
            </button>
            <button onClick={ onClick3 } className="btn btn-primary form-control mt-3">
                Set focus3
            </button>
        </>
    );
}