import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-hola5',
  templateUrl: './hola5.component.html',
  styleUrls: ['./hola5.component.css']
})
export class Hola5Component implements OnInit {

  listaPersonas:Persona[]=[];
  seleccionada:Persona;
  
  constructor() {
      this.seleccionada={} as Persona;
      this.listaPersonas.push(new Persona("pepe","perez",25,true));
      this.listaPersonas.push(new Persona("juan","sanchez",45,false));
      this.listaPersonas.push(new Persona("ana","perez",25,true));
      this.listaPersonas.push(new Persona("maria","sanchez",45,false));
   }

   selecciona(unaPersona:Persona):void {

    this.seleccionada=unaPersona;

   }

  ngOnInit() {
  }

}
