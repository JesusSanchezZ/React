import { fireEvent, render, screen } from '@testing-library/react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { createRenderer } from 'react-dom/test-utils';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom',() => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <SearchPage/>', ()=> {
    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar correctamente con valores por defecto',()=>{
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        //expect( container ).toMatchSnapshot();
        //screen.debug();
    });

    test('Debe de mostrar a Batman y el input con el valor del queryString',()=>{
        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );

        //screen.debug();
        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');

        const searchDiv = screen.getByLabelText('search-hero');
        expect( searchDiv.style.display ).toBe('none');
    });

    test('Debe de mostrar un error si no se encuenctra el heroe',()=>{
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('alert-danger');
        
        //screen.debug();
        expect( alert.style.display).toBe('');
    });

    test('Debe de llamar el navigate a la pantalla nueva',()=>{
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: {name: 'searchText', value: 'superman'}});

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect( mockedUseNavigate ).toHaveBeenCalledWith('?q=superman');
    });
});