import { fireEvent, render,screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';



describe('Preba a componente <LoginPage/>', ()=>{
    test('Debe de mostrar el componente sin el usuario',()=>{
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        expect( preTag.innerHTML).toBe('null');
        //screen.debug();
    });

    test('Debe de llamar el setUser cuando se hace click con el botón',()=>{
        const setUserMock = jest.fn();

        const user = {
            id: 123,
            name: 'Jesus',
            email: 'jesus@goo.com'
        };

        render(
            <UserContext.Provider value={{user:null, setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const bttLoginSet = screen.getByRole('button');
        fireEvent.click(bttLoginSet);
        
        expect(setUserMock).toHaveBeenCalledWith(user);
        //screen.debug();
    });
});