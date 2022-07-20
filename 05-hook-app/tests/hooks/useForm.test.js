const { renderHook, act } = require("@testing-library/react");
import { useForm } from '../../src/hooks'

describe('Pruebas en useForm', ()=> {
    const initialForm = {
        name: 'Jesus',
        email: 'jesus@gmail.com'
    }

    test('Debe de regresar los valores por defecto', ()=>{
        const { result } = renderHook( ()=> useForm(initialForm) );
        //console.log( result );

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            fomrState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });
    });

    test('Debe de cambiar el nombre del formulario', ()=>{
        const newValue = 'Pedrin';
        const { result } = renderHook( ()=> useForm());
        const { onInputChange } = result.current;

        const target = {
            name: 'name',
            value: newValue
        }
        act(()=>{
            onInputChange({ target });  // onInputChange({ target: { name: 'name', value: newValue }});
            console.log(result.current.fomrState);
        });

        expect( result.current.name ).toBe( newValue );
        expect( result.current.fomrState.name ).toBe( newValue );
    });

    test('Debe de realizar el reset del formulario',()=>{
        const newValue = 'Juan';
        const {result} = renderHook(()=> useForm(initialForm));
        const { onInputChange, onResetForm} = result.current;

        act(()=>{
            onInputChange({ target: { name:'name', value: newValue}});
            onResetForm();
        });

        expect( result.current.name).toBe(initialForm.name);
        expect( result.current.fomrState.name).toBe(initialForm.name);

    });
});