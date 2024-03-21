import { Component, Input } from '@angular/core';
import { Personaje } from '../../../models/personajes/personaje/personaje.model';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  @Input({required: true}) personaje: Personaje = {nombre: '', imagen: ''};

  constructor() { }

}
