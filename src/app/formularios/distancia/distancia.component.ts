import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent implements OnInit {
  formulario!: FormGroup;
  resultado: number = 0;
  objMult=new Distancia();

  constructor(){}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      x1: new FormControl(' '),
      y1: new FormControl(' '),
      x2: new FormControl(' '),
      y2: new FormControl(' ')
    });
  }



  calcular(): void {
    this.objMult.x1 = this.formulario.value.x1;
    this.objMult.y1 = this.formulario.value.y1;
    this.objMult.x2 = this.formulario.value.x2;
    this.objMult.y2 = this.formulario.value.y2;



    this.resultado = this.objMult.calcularDist();
  }
}
