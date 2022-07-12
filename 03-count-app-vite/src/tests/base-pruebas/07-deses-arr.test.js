import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Pruebas en 07-dese-arr',()=>{
    test('Debe retornar un string y un número',()=>{
        const [letter, numbers] = retornaArreglo();
        
        expect( letter).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letter).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letter).toEqual(expect.any(String));
    });
});