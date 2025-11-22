import { Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';

export default[

  {
    path:'listaalumnos',
    loadComponent: () => import('./alumnos/alumnos.component').then(c=>c.AlumnosComponent)
  },

  {
    path:'agregar',
    loadComponent:()=>import('./agregar/agregar.component')
  },

    {
    path:'editar',
    loadComponent:()=>import('./editar/editar.component')
  },

      {
    path:'eliminar/:matricula',
    loadComponent:()=>import('./eliminar/eliminar.component').then(c=>c.default)
  },



]as Routes;
