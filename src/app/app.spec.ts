import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component"
import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";
import { NO_ERRORS_SCHEMA } from "@angular/core";


describe("Pruebas del app component", () => {

    let componente: AppComponent;
    let fixture: ComponentFixture<AppComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            providers: [],
            imports: [RouterTestingModule.withRoutes([])],
            //A veces solo queremos probar un componente en si, y para que no 
            //nos obligue a importar toodos los modulos podemos usar un parametro
            schemas: [NO_ERRORS_SCHEMA]
        })

        fixture = TestBed.createComponent(AppComponent);
        componente = fixture.componentInstance
    })


    it("Debe crearse el componenete", () => {
        expect(componente).toBeTruthy()
    })

    it("Debe crearse la aplicación html", () => {
        const app = fixture.debugElement.componentInstance;
        // fixture.detectChanges()
        //Se usa para esperar que todo haya cargado, tambien s epuede usar async await
        fixture.whenStable().then(() => {
            expect(app).toBeTruthy()
        })

        //Otra forma con async await
        // await fixture.whenStable()
        //expect(app).toBeTruthy()

        //Otros comandos:
        const h1 = fixture.debugElement.query(By.css('h1')) //es como el document.querySelector()
        // const h1 = fixture.debugElement.query(By.css('#miID')) //por id
        // const h1 = fixture.debugElement.query(By.css('.btn, btn-dark')) //por clase/s
        const elemento = fixture.debugElement.query(By.directive(RouterOutlet)) //busca directiavas como <router-outlet> // me confunde si es la directiva o la clase
        expect(elemento).not.toBeNull()

        expect(h1.nativeElement.innerHTML).toContain('hello')

    })


    it("Validar router links", () => {
        const elementos = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref))

        console.log(elementos);

        let existe = false;


        for (const element of elementos) {
            if (element.attributes['routerLink'] === '/inicio') {
                existe = true;
                break;
            }
        }

        expect(existe).toBeTruthy()

    })







})