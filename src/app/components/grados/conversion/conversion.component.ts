import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Grado } from '../../../models/grades/grado/grado.model';

@Component({
  selector: 'app-conversion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conversion.component.html',
  styleUrl: './conversion.component.css'
})
export class ConversionComponent {
  @Output() grabar = new EventEmitter();
  grade: Grado = { celcius: 0, fahrenheit: 32 };
  grades = 0;
  type = 'Celcius';

  grabarHandler() {
    
    if (this.type === 'Celcius') {
      this.grade.celcius = this.grades;
      this.grades = parseFloat( ((this.grades * 9 / 5) + 32).toFixed(2) );
      this.grade.fahrenheit = this.grades;
      this.grades = 0;
    }

    if (this.type === 'Fahrenheit') {
      this.grade.fahrenheit = this.grades;
      this.grades = parseFloat( ((this.grades - 32) * 5 / 9).toFixed(2) );
      this.grade.celcius = this.grades;
      this.grades = 0;
    }

    this.grabar.emit(this.grade);
  }
}
