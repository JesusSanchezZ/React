export const ShowIncrement = ({increment}) => {
    console.log('Me volví a generar :(');
    
    return (
        <button
            className="btn btn-success"
            onClick={()=> {
                increment();
            }}
        >
            Incrementar
        </button>
    );
}