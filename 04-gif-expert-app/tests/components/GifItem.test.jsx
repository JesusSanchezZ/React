import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Pruebas a componente <GifItems/>',()=>{
    const title='Saytama';
    const url  ='https://udemy.com/saytama.gif';

    test('Snapshot inicial',()=>{
        const { container } = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el url y el alt indicado',()=>{
        render(<GifItem title={title} url={url}/>);
        //screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect( alt ).toBe( title );
        expect( src ).toBe( url );
    });

    test('Debe de mostrar el título en el componente', ()=>{
        render(<GifItem title={title} url={url}/>);
        expect( screen.getByText( title ) ).toBeTruthy();
    });
});