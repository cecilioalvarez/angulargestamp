import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-vista-personas',
  templateUrl: './vista-personas.component.html',
  styleUrls: ['./vista-personas.component.css']
})
export class VistaPersonasComponent implements OnInit {

  personaNueva: Persona = {} as Persona;
  private lista: Persona[];
  filtroNombre: string="";
  constructor(private miservicio: PersonasService) {
  }
  /*
  get lista(): Persona[] {
    if (this.filtroNombre=="") {
      return this._lista;
    }
    return this._lista.filter((p) => p.nombre.startsWith(this.filtroNombre));
  }
  set lista(value: Persona[]) {
    this._lista = value;
  }
  */


ngOnInit() {
  this.miservicio.buscarTodas().then((datos)=> {
    this.lista=datos as Persona[];
  })
}
insertar() {
  this.miservicio.insertar(this.personaNueva);
  this.personaNueva = {} as Persona;
}
borrar(persona) {
  this.miservicio.borrar(persona);
}


}
