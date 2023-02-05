import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../medicos.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html'
})
export class MedicosComponent implements OnInit {

  public medicos: any[] = [];
  public mensajeError: string = '';

  constructor(private medicoService: MedicosService) { }

  ngOnInit(): void {

    this.medicoService.getMedicos().subscribe(medicos => {
      this.medicos = medicos;
      console.log("Fue obtenido");
    })

  }

  public agregarMedico(): void {
    const medico = { nombre: 'Johan' }

    this.medicoService.agregarMedico(medico).subscribe({
      next: (resp) => {
        this.medicos.push(resp)
        console.log("Fue agregado");
      },
      error: (error) => {
        this.mensajeError = error;
      }
    })
  }

  public borrarMedico(medico: any) {

    const confirmar = confirm('Confirmar eliminación');

    if (confirmar) {
      this.medicoService.borrarMedico(medico).subscribe({
        next: (resp) => {
          console.log('Fue eliminado');
        }
      })
    }


  }





}
