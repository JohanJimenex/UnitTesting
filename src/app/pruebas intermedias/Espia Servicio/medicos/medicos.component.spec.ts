import { EmptyError, of, onErrorResumeNext, throwError } from "rxjs";
import { MedicosService } from "../medicos.service";
import { MedicosComponent } from "./medicos.component"


xdescribe('Pruebas del MedicosComponent', () => {

  let componente: MedicosComponent;
  let servicio: MedicosService;

  beforeEach(() => {
    servicio = new MedicosService(null!)
    componente = new MedicosComponent(servicio);
  })

  it("Al iniciar el componente debe cargar los medicos", () => {
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return of(['1', '2', '3']);
    })
    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);
  })

  it('Debe llamarse el servicio de "AgregarMedico()"', () => {
    const espia = spyOn(servicio, "agregarMedico").and.callFake(() => {
      return of(true)
    })
    componente.agregarMedico();
    expect(espia).toHaveBeenCalled()
  })

  it("Debe agregar 1 medico al arreglo", () => {
    spyOn(servicio, "agregarMedico").and.returnValue(of({ nombre: "test" }))
    componente.agregarMedico()
    expect(componente.medicos.length).toBe(1);
  })

  it("Debe mostrar un error si falla el servicio", () => {
    let msjError = "hay error";
    spyOn(servicio, "agregarMedico").and.returnValue(throwError(() => msjError));
    componente.agregarMedico()
    expect(componente.mensajeError).toBe(msjError);
  })

  it("Debe llamarse el servicio de 'borrarMedico'", () => {
    spyOn(window, "confirm").and.returnValue(true);
    let espia = spyOn(servicio, "borrarMedico").and.returnValue(of())
    componente.borrarMedico({ nombre: "jj" })
    expect(espia).toHaveBeenCalledWith({ nombre: "jj" })
  })

  it("No debe llamarse el servicio de 'borrarMedico'", () => {
    spyOn(window, "confirm").and.returnValue(false);
    let espia = spyOn(servicio, "borrarMedico").and.returnValue(of())
    componente.borrarMedico({ nombre: "jj" })
    expect(espia).not.toHaveBeenCalledWith({ nombre: "jj" })
  })

  it('Debe imprimir por consola "Fue eliminado"', () => {
    spyOn(servicio, "borrarMedico").and.returnValue(of(true))
    spyOn(window, "confirm").and.returnValue(true);
    spyOn(console, "log")

    componente.borrarMedico({ nombre: "johan" })


    expect(console.log).toHaveBeenCalledWith("Fue eliminado")
  })


})