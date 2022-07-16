export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            // se pone esta excepción cuando aún no se implementa la función, solo para pruebas throw new Error('Action.type = ABC no est implementada');
            return [ ...initialState, action.payload ];
        case '[TODO] Remove Todo':
            // { type: [todo remove], payload: id }
            return initialState.filter( todo => todo.id !== action.payload);
        case '[TODO] Toggle Todo':
            return initialState.map( todo => { 
                if (todo.id === action.payload){ // payload === id
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });
        default:
            return initialState;
    }
}