import { render, screen, fireEvent } from '@testing-library/react'; 
import { CounterApp } from '../CounterApp';

describe('Pruebas a componente <CounterApp/>',()=>{
    const title = 'CounterApp';
    const count = 10;

    test('Debe de hacer match con el snapshot',()=>{
        const { container } = render(<CounterApp/>);
        //expect(screen.getByText(title)).toMatchSnapshot();
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial de 100',()=>{
        render(<CounterApp value={ count } />);
        expect( screen.getByRole('heading',{level:2}).innerHTML).toContain(count);
    });

    test('Debe de incrementar con el botón +1',()=>{
        render(<CounterApp value={count} />);
        fireEvent.click( screen.getByText('+1') )
        
        expect( screen.getByText('11')).toBeTruthy();
    });

    test('Debe de decrementar con el botón -1',()=>{
        render(<CounterApp value={count}></CounterApp>);
        fireEvent.click(screen.getByText('-1'));

        expect(screen.getByText('9')).toBeTruthy();
    });

    test('Debe de funcionar el botón de reset',()=>{
        render(<CounterApp value={count}/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));

        fireEvent.click(screen.getByText('Reset'));

        screen.getByRole('button', { name: 'button-reset'});

        //screen.debug();
        //expect(screen.getByText(count + 1)).toBeTruthy();
    });
});