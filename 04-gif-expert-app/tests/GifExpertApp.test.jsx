import {screen, render, fireEvent} from '@testing-library/react';
import {GifExpertApp} from '../src/GifExpertApp';

describe('Prueba de componentes <GifExpertApp.test.jsx',()=>{
    test('Prueba inicial',()=>{
        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Goku'}});

        screen.debug();
        expect( input.value ).toBe('Goku');
    });
});