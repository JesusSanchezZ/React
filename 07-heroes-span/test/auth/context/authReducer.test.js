import { AuthReducer } from "../../../src/auth/context/AuthReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas a authReducer', ()=>{
    test('Debe de retornar el estao por defecto',()=>{
        const state = AuthReducer({ logged: false }, {});

        expect( state ).toEqual( { logged: false });
    });

    test('Debe le llamar el login autenticar y establecer el user',()=>{
        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: '123'
            }
        }
        const state = AuthReducer({ logged: false }, action );

        expect( state ).toEqual({
            logged: true,
            user: action.payload
        });

    });

    test('debe de borrar el name del usuario y logged en false',()=>{
        const state = {
            logged: true,
            user: { id:'123', name: 'Juan'}
        }

        const action = {
            type: types.logout
        }

        const newState = AuthReducer( state, action );

        expect( newState ).toEqual({ logged: false });
    });
});