import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  private urlBase: string = 'https://reqres.in/api/users?page=2'

  constructor(private http: HttpClient) { }

  public getMedicos(): Observable<any> {
    return this.http.get(this.urlBase)
  }

  public agregarMedico(medico: any): Observable<any> {
    return this.http.post(this.urlBase, medico).pipe(map(resp => medico));
  }

  public borrarMedico(medico: any): Observable<any> {
    return this.http.delete("https://reqres.in/api/users/2").pipe(map(resp => medico))
  }

}
