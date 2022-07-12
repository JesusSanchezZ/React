import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Pruebas en 09-promesas',()=>{
    test('getHeroeByIdAsync debe de retornar un héroe',(done)=>{
        const id = 100;
        getHeroeByIdAsync(id).then(
            hero => {
                //expect(true).toBe(false);
                // expect(hero).toEqual({
                //     id: 1,
                //     name: 'Batman',
                //     owner: 'DC'                
                // });
                expect(hero).toBeFalsy();
                done();
                done();
            }
        )
        .catch( error => {
            expect( error ).toBe(`No se pudo encontrar el héroe`);
            done();
        });


    });
});