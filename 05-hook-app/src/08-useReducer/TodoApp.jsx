import { useReducer } from "react";
import { TodoAdd, TodoList } from "./modules";
import { todoReducer } from "./todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del tiempo',
        done: false
    }
];

export const TodoApp = () => {
    const [todos, dispatch] = useReducer( todoReducer, initialState);

    const handleNewTodo = ( todo ) =>{
        console.log({ todo });
    }
    return (
        <>
            <h1>Todo App: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <TodoList todos={todos}/>
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