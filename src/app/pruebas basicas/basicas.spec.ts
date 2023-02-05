import { Jugador, saludar } from "./basicas"

let x = 1;

xit('test x', () => {
    expect(x).toBe(1)
})


xdescribe('Pruebas de string', () => {

    const nombre = 'Johan';

    const resp = saludar(nombre);

    it(`Debe retornar "Hello ${nombre}"`, () => {
        expect(resp).toBe(`Hello ${nombre}`);
    })

    it(`Debe contener la palabra "${nombre}" en la respuesta`, () => {
        expect(resp).toContain(nombre);
    })

})

xdescribe('Prueba de clase', () => {

    let jugador1: Jugador = new Jugador();
    // let jugador1:Jugador;

    afterEach(() => {
        jugador1 = new Jugador();
    })

    it('Debe retornar 0 cuando la cantidad es mayor o igual al hp disponible', () => {
        jugador1.disminuirHp(120);
        const resp = jugador1.hp;
        expect(resp).toBe(0);
    })

    it('Debe retornar 20 cuando se disminuye 80', () => {
        jugador1.disminuirHp(80);
        const resp = jugador1.hp;
        expect(resp).toBe(20);
    })

    it('Debe retornar 100 cuando son numeros negativos', () => {
        jugador1.disminuirHp(-10);
        const resp = jugador1.hp;
        expect(resp).toBe(100);
    })





})