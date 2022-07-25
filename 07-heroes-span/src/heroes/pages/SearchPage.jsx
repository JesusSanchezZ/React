import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components'
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
    const navigate = useNavigate();             // obtenemos la navegación 
    const location = useLocation();             // obtener información de la ubicación donde nos encontramos

    //const query = queryString.parse(location.search);
    //console.log({query});
    const { q = ''} = queryString.parse(location.search);

    const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && (heroes.length === 0);

    const {searchText, onInputChange} = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        //if( searchText.trim().length <= 1 ) return;

        navigate(`?q=${ searchText }`);
        //console.log({ searchText });
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form 
                        aria-label='form'
                        onSubmit={ onSearchSubmit }
                    >
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ onInputChange }
                        />
                        <button className="btn btn-outline-primary form-control mt-1">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4><span className='badge rounded-pill bg-dark'>{heroes.length}</span> Results</h4>
                    <hr />

                    {/* {
                        ( q === '')
                        ? <div className="alert alert-primary">Search a hero</div>
                        : ( heroes.length === 0)
                            && <div className="alert alert-danger">No hero with <b>{q}</b></div>
                    } */}

                    <div 
                        aria-label="search-hero"
                        className="alert alert-primary animate__animated animate__rubberBand" 
                        style={{ display: showSearch ?'': 'none'}}
                    >
                        Search a hero
                    </div>

                    <div 
                        aria-label="alert-danger"
                        className="alert alert-danger animate__animated animate__rubberBand" 
                        style={{ display: showError ?'': 'none'}}
                    >
                        No hero with <b>{q}</b>
                    </div>

                    {
                        heroes.map( hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}


/* 
    Instalación de paquete query string para leer propiedades del url
        npm install query-string
    */