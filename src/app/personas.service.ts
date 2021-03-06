import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  lista:Persona[]=[];
  constructor(private httpClient:HttpClient) { 
    /*
    this.lista.push(new Persona("pepe","perez",20));
    this.lista.push(new Persona("juan","perez",25));
    this.lista.push(new Persona("gema","gomez",30));
    */
  }

  buscarTodas():Promise<Persona[]> {

    return this.httpClient.get<Persona[]>("http://localhost:3000/personas").toPromise();
  }


  insertar(persona:Persona):Promise<Persona> {

   return this.httpClient.post<Persona>("http://localhost:3000/personas",persona).toPromise();
  }

  borrar(persona:Persona):Promise<Persona> {

   return this.httpClient.
   delete<Persona>(`http://localhost:3000/personas/${persona.nombre}`).toPromise();
  }
}
