import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosComponent } from './pruebas intermedias/Espia Servicio/medicos/medicos.component';
import { HttpClientModule } from "@angular/common/http";
import { MiComponenteComponent } from './Pruebas Intermedias2/mi-componente/mi-componente.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MiComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
