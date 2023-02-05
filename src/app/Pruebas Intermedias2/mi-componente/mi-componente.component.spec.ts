import { ComponentFixture, TestBed } from "@angular/core/testing"
import { MiComponenteComponent } from "./mi-componente.component"
import { HttpClientModule } from "@angular/common/http";
import { MiServicioService } from "../mi-servicio.service";
import { of } from "rxjs";

class MiServicioServiceFake {

  getUsuarios() {
    return of(["1", "2"])
  }

}


describe("Prueba de mi Componente con TestBed y Fixture", () => {

  let componente: MiComponenteComponent;
  let fixture: ComponentFixture<MiComponenteComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [MiComponenteComponent],
      providers: [{ provide: MiServicioService, useClass: MiServicioServiceFake }],
      // imports: [HttpClientModule] //
    })

    fixture = TestBed.createComponent(MiComponenteComponent);
    componente = fixture.componentInstance;
  })

  it("Debe crearse el componente", () => {
    expect(componente).toBeTruthy();
  })

  it("Debe tener 2 usuarios agregados al arreglo", () => {
    componente.ngOnInit();
    expect(componente.usuarios.length).toBe(2) // se llama el del fake
  })

  it("Debe llamarse el metodo del servicio 'getUsuarios()'", () => {
    const servicio = TestBed.inject(MiServicioService)
    spyOn(servicio, "getUsuarios").and.callThrough();

    componente.ngOnInit();

    expect(servicio.getUsuarios).toHaveBeenCalled()
  })






})