import { Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';


export default[

  {
    path:'alumnos',
    loadComponent:()=>import('./alumnos/alumnos.component').then(c=>c.AlumnosComponent)
  },


  {
    path:'agregar',
    loadComponent:()=>import('./agregar/agregar.component').then(c=>c.AgregarComponent)
  },

    {
    path:'editar',
    loadComponent:()=>import('./editar/editar.component').then(c=>c.EditarComponent)
  },

      {
    path:'eliminar',
    loadComponent:()=>import('./eliminar/eliminar.component').then(c=>c.EliminarComponent)
  },



]as Routes;
