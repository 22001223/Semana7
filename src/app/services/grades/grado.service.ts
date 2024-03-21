import { Injectable } from '@angular/core';
import { Grado } from '../../models/grades/grado/grado.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradoService {
  private list = new BehaviorSubject<Grado[]>([]);
  currentList = this.list.asObservable();

  constructor() { }

  addToList(grade: Grado) {
    let array = this.list.getValue();
    array.push({...grade});
    this.list.next(array);
  }

  getList() {    
    return this.list;
  }

  deleteGrade(grade: Grado) {
    let array = this.list.getValue();
    array = array.filter((g) => g !== grade);
    this.list.next(array);
  }

}
