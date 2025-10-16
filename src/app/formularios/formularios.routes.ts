import { Routes } from '@angular/router';
import { AporBComponent } from './apor-b/apor-b.component';
import { DistanciaComponent } from './distancia/distancia.component';
import { ZodiacoComponent } from './zodiaco/zodiaco.component';


export default[

  {
    path:'distancia',
    loadComponent:()=>import('./distancia/distancia.component').then(c=>c.DistanciaComponent)
  },


  {
    path:'apor-b',
    loadComponent:()=>import('./apor-b/apor-b.component').then(c=>c.AporBComponent)
  },

    {
    path:'zodiaco',
    loadComponent:()=>import('./zodiaco/zodiaco.component').then(c=>c.ZodiacoComponent)
  },



]as Routes;
