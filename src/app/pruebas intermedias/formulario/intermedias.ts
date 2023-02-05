import { EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators, } from "@angular/forms";


export class Formulario {

    public formulario: FormGroup;
    public edad = new EventEmitter<number>()

    constructor(fb: FormBuilder) {

        this.formulario = fb.group({
            usuario: ['', [Validators.required, Validators.minLength(2)]],
            clave: ['', [Validators.required, Validators.maxLength(6)]]
        })
    }

    emitirEdad(): void {
        this.edad.emit(31);
    }

}