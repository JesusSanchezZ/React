import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en <AppRouter />',() => {
    test('Debe de mostrar el login si no está autenticado', () => {
        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        //expect(screen.getByText('Login')).toBeTruthy();
        expect(screen.getAllByText('Login').length).toBe(2);
        //screen.debug();
    });

    test('Debe de mostrar el componente de Marvel si está autenticado',()=>{
        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Jesús'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        //screen.debug();
        expect( screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);

    });
});