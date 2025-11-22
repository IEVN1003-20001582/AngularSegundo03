import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlumnoFilterPipe } from '../alumnos-filter.pipe';
import { ProyectoapiService } from '../proyectoapi.service';
import { AlumnosUtl } from '../alumnos';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, AlumnoFilterPipe],
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  imageWidth:number = 50;
  imageMargin:number = 2;
  muestraImagen:boolean = true;
  listFilter:string = '';
  alumnoTitle!: string;
  dataSource:any=[];

  constructor(public alumnosUtl: ProyectoapiService) {}

    alumnosIric:AlumnosUtl[] = [
      {
        matricula: 1234,
        nombre: 'Pedro',
        apaterno: 'Lopez',
        amaterno: 'Muños',
        correo: 'pedro@gmail.com'
      }
    ];

 ngOnInit(): void {
  this.alumnosUtl.getAlumnos().subscribe({
    next: (response: any) => {
      this.alumnoTitle = response.alumnos;
    },
    error: (error) => console.error(error)
  });


  }
}
