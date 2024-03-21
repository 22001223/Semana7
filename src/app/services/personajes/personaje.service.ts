import { Injectable } from '@angular/core';
import { Personaje } from '../../models/personajes/personaje/personaje.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  private personajes: Personaje[] = [
    { nombre: 'Wolverine',   imagen: '../../../assets/x-men/wolverine.png' },
    { nombre: 'Cyclopes',    imagen: '../../../assets/x-men/cyclopes.png' },
    { nombre: 'Jean Gray',   imagen: '../../../assets/x-men/jean-grey.png' },
    { nombre: 'Beast',       imagen: '../../../assets/x-men/beast.png' },
    { nombre: 'Professor X', imagen: '../../../assets/x-men/professor-x.png' },
    { nombre: 'Storm',       imagen: '../../../assets/x-men/storm.png' },
    { nombre: 'Iceman',      imagen: '../../../assets/x-men/iceman.png' },
    { nombre: 'Colossus',    imagen: '../../../assets/x-men/colossus.png' },
  ];

  private personaje = new BehaviorSubject<Personaje>(this.personajes[0]);
  currentPersonaje = this.personaje.asObservable();

  constructor() { }

  seleccionarPersonaje(personaje: String) {
    this.personaje.next( {...this.personajes.find(p => p.nombre === personaje) || this.personajes[0]} );
  }

  getPersonaje() {
    return this.personaje;
  }

}
