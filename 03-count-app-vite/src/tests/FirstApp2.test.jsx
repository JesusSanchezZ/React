import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en <FirstApp>', ()=>{
    const title    = 'Hola, Soy Jesus';
    const subtitle = 'Soy un subtitulo';

    test('Debe de hacer match con el snapshot',()=>{
        
        render(<FirstApp title={ title }/>);
        expect(screen.getByText(title)).toBeTruthy();
        //screen.debug();
        // expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el título en un h1', ()=>{
        render( <FirstApp title={title}/>);
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
    });

    test('Debe de mostrar el subtitulo enviado por props',()=>{
        render(
            <FirstApp
                title={title}
                subTitle= {subtitle}
            />
        );

        expect(screen.getAllByText(subtitle).length).toBe(2);
    });
});