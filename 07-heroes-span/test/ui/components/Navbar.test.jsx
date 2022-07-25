import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () =>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <Navbar/>', ()=> {
    const contextValue = {
        logged: true,
        user: {
            name: 'Jesus'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks() );

    test('Debe de mostrar el nombre del usuario',()=>{
        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        //screen.debug();
        expect( screen.getByText('Jesus')).toBeTruthy();
    });

    test('Debe de llamar el logout y navigate cuando se hace click en el boton',()=>{
        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});
    });
});