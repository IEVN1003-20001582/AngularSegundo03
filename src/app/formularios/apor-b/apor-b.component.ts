
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AporB } from './apor-b';

@Component({
  selector: 'app-apor-b',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './apor-b.component.html',
  styleUrl: './apor-b.component.css'
})
export class AporBComponent implements OnInit {
  formulario!: FormGroup;
  resultado: number = 0;
  objMult=new AporB();

  constructor(){}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      a: new FormControl(' '),
      b: new FormControl(' '),
    });
  }



   calcular(): void {
    this.objMult.a = this.formulario.value.a;
    this.objMult.b = this.formulario.value.b;


    this.resultado = this.objMult.calcularMult();


}
}
