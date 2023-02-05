import { FormBuilder } from "@angular/forms";
import { Formulario } from "./intermedias"



xdescribe('Prueba de formulario', () => {

    let componente: Formulario;

    beforeEach(() => {
        componente = new Formulario(new FormBuilder());
    })

    it("El formulario debe contener 2 campos, 'usuario' y 'clave'", () => {
        expect(componente.formulario.contains('usuario')).toBeTruthy();
        expect(componente.formulario.contains('clave')).toBeTruthy();
    })

    it('El observable debe emitir un 31', () => {
        let nuevaEdad: number = 0;
        componente.edad.subscribe(resp => {
            nuevaEdad = resp;
        })
        componente.emitirEdad();
        expect(nuevaEdad).toBe(31);
    })

    it('Los campos "usuario" y "clave", deben ser obligatorios', () => {
        expect(componente.formulario.valid).toBeFalsy();
    })

    it('Los campos "usuario" debe tener un minimo de 2 caracteres', () => {
        componente.formulario.get('usuario')?.setValue('J');
        componente.formulario.get('clave')?.setValue('123456');
        expect(componente.formulario.invalid).toBeTruthy();
    })

    it('Los campos "Clave" debe tener un maximo de 6 caracteres', () => {
        componente.formulario.get('usuario')?.setValue('12');
        componente.formulario.get('clave')?.setValue('1234567');
        expect(componente.formulario.invalid).toBeTruthy();
    })

})



