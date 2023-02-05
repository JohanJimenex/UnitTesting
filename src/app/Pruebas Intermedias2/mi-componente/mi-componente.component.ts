import { Component, OnInit } from '@angular/core';
import { MiServicioService } from '../mi-servicio.service';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private miServ: MiServicioService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  private obtenerUsuario() {
    this.miServ.getUsuarios().subscribe((resp: any) => {
      console.log('Desde el componente ', resp);

      this.usuarios = resp;
    })
  }

}
