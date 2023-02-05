import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor(private http: HttpClient) { }

  public getUsuarios() {
    return this.http.get("https://reqres.in/api/users?page=2").pipe(
      map((resp) => ["un", "dos"])
    )
  }
}
