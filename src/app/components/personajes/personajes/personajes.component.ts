import { Component, inject } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

import { SeleccionadorComponent } from "../seleccionador/seleccionador.component";
import { DisplayComponent } from '../display/display.component';
import { PersonajeService } from "../../../services/personajes/personaje.service";

import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';
import { Personaje } from '../../../models/personajes/personaje/personaje.model';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [ToolbarComponent, RouterLinkWithHref, SeleccionadorComponent, DisplayComponent],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  private personajeService = inject(PersonajeService);
  personaje: Personaje = {nombre: '', imagen: ''};

  mostrar(personaje: String) {
    this.personajeService.seleccionarPersonaje(personaje);
  }

  ngOnInit() {
    this.getPersonaje();
  }

  ngOnChanges() {
    this.getPersonaje();
  }

  getPersonaje() {
    this.personajeService.getPersonaje().subscribe({
      next: (personaje) => this.personaje = {...personaje},
      error: () => {}
    });
  }

}
