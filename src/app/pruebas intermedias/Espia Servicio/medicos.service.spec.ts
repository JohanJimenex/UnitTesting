import { of } from "rxjs";
import { MedicosService } from "./medicos.service"
import { HttpClient } from "@angular/common/http";


xdescribe("Prueba del servisio 'MedicoServices'", () => {

    let servicio: MedicosService;

    beforeEach(() => {
        servicio = new MedicosService(new HttpClient(null!));
    })


    it("Prueba que se llame el metodo 'getMedicos'", () => {

        let test = [];

        spyOn(servicio, "getMedicos").and.returnValue(of([1, 2, 3]))

        servicio.getMedicos().subscribe(r => {
            test = r;
            expect(r).toContain(3);
        })

        expect(servicio.getMedicos).toHaveBeenCalled()
        expect(test.length).toEqual(3)

    })
})