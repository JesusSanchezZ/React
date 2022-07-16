import { useEffect } from "react";
import { useReducer } from "react";
import { useTodo } from "../hooks";
import { TodoAdd, TodoList } from "./modules";
import { todoReducer } from "./todoReducer";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la piedra del tiempo',
    //     done: false
    // }
];

const init = () =>{
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const TodoApp = () => {
    // Aplicación sin custom hooks
    const [todos, dispatch] = useReducer( todoReducer, initialState, init);

    useEffect(
        () => {
            //console.log(todos);
            localStorage.setItem('todos', JSON.stringify(todos));
        },[todos]
    );

    const handleNewTodo = ( todo ) =>{
        //console.log({ todo });
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );  // mandamos la acción al reducer
    }

    const handleDeleteTodo = ( id ) => {
        //console.log({id});
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) =>{
        //console.log({ id });
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return (
        <>
            <h1>Todo App: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }    
                    />
                    {/* <ul className="list-group">
                        {
                            todos.map( todo => (
                                // TodoItem ...
                                <li key={ todo.id } className="list-group-item d-flex justify-content-between">
                                    <span className="align-self-center">{ todo.description }</span>
                                    <button className="btn btn-danger">Borrar</button>
                                </li>
                            ))
                        }
                        
                    </ul>  */}
                    {/* Fin TodoList */}
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo}/>
                    {/* TodoAdd onNewTodo( todo ) */}
                    {/* { id: new ..., description: ..., done: false } */}
                    {/* Fin TodoAdd */}
                </div>
            </div>
        </>
    );
}