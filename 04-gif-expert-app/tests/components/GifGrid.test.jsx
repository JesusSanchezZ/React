import {render, screen, renderHook} from '@testing-library/react';
import {GrifGrid} from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />',()=>{
    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente',()=>{
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GrifGrid category={category}/>);
        //screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe de mostrar items cuando se cargan las imágenes useFetchGifs',()=>{
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/Goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GrifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(2);
        //screen.debug();
    });
});