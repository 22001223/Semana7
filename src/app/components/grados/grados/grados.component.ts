import { Component, inject } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';
import { ConversionComponent } from '../conversion/conversion.component';

import { Grado } from '../../../models/grades/grado/grado.model';
import { GradoService } from '../../../services/grades/grado.service';

@Component({
  selector: 'app-grados',
  standalone: true,
  imports: [ToolbarComponent, RouterLinkWithHref, ConversionComponent],
  templateUrl: './grados.component.html',
  styleUrl: './grados.component.css'
})
export class GradosComponent {
  private gradoService = inject(GradoService)

  list: Grado[] = [
    { celcius: 1, fahrenheit: 32 },
    { celcius: 100, fahrenheit: 212 },
    { celcius: 37, fahrenheit: 98.6 }
  ];

  addToList(grade: Grado) {
    this.gradoService.addToList(grade);
  }

  ngOnInit() {
    this.getList();
  }

  ngOnChanges() {
    this.getList();
  }

  getList() {
    this.gradoService.getList().subscribe({
      next: (list) => this.list = [...list],
      error: () => {}
    });
  }

  deleteGrade(grade: Grado) {
    this.gradoService.deleteGrade(grade);
  }
  
}
