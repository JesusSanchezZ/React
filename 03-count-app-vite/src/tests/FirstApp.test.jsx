import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en <FirstApp>', ()=>{
    // test('debe de hacer match con el snapshot',()=>{
    //     const title = 'Hola, soy Jesus';
    //     const { container } = render(<FirstApp title={title} />);

    //     //console.log(container);
    //     expect( container ).toMatchSnapshot();
    // });

    test('debe de mostrar el título en un h1',()=>{
        const title = 'Hola, soy Jesus';
        const { container, getByTestId } = render(<FirstApp title={title} />);

        //expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        //console.log(h1);
        //expect( h1.innerHTML ).toBe( title );
        // expect( h1.innerHTML ).toContain( title );

        //expect(getByTestId('test-title')).toBeTruthy();
        //expect(getByTestId('test-title').innerHTML).toBe(title);
        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('debe de mostrar el subtitulo enviado por propts',()=>{
        const title = 'Hola, soy Jesus';
        const subtitle = 'Soy un subtitulo';
        const { getByText } = render(
            <FirstApp 
                title={title} 
                subTitle ={subtitle}
            />
            
        );

        expect(getByText(subtitle)).toBeTruthy();
    });
});