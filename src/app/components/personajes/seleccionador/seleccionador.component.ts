import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seleccionador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seleccionador.component.html',
  styleUrl: './seleccionador.component.css'
})
export class SeleccionadorComponent {
  @Output() mostrar = new EventEmitter();
  personaje = 'Wolverine';

  mostrarHandler() {
    this.mostrar.emit(this.personaje);
  }
}
