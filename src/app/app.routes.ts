import { Routes } from '@angular/router';
import { GradosComponent } from './components/grados/grados/grados.component';
import { PersonajesComponent } from './components/personajes/personajes/personajes.component';

export const routes: Routes = [
    {
        path: '',
        component: GradosComponent
    },
    {
        path: 'grados',
        component: GradosComponent
    },
    {
        path: 'personajes',
        component: PersonajesComponent
    }
];
