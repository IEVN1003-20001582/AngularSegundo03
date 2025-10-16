import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZodiacoChino } from './zodiaco';

@Component({
  selector: 'app-horoscopos',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent implements OnInit {
  formularioZodiaco!: FormGroup;
  infoFinal: { nombreCompleto: string, edad: number, signo: string, imagen: string } | null = null;
  objZodiac = new ZodiacoChino();

  constructor() {}

  ngOnInit(): void {
    this.formularioZodiaco = new FormGroup({
      diaN: new FormControl(''),
      mesN: new FormControl(''),
      anioN: new FormControl(''),
      nombreU: new FormControl(''),
      apPaternoU: new FormControl(''),
      apMaternoU: new FormControl(''),
      sexoU: new FormControl('')
    });
  }

  mostrarResultado(): void {
    this.objZodiac.diaN = this.formularioZodiaco.value.diaN;
    this.objZodiac.mesN = this.formularioZodiaco.value.mesN;
    this.objZodiac.anioN = this.formularioZodiaco.value.anioN;
    this.objZodiac.nombreU = this.formularioZodiaco.value.nombreU;
    this.objZodiac.apPaternoU = this.formularioZodiaco.value.apPaternoU;
    this.objZodiac.apMaternoU = this.formularioZodiaco.value.apMaternoU;
    this.objZodiac.sexoU = this.formularioZodiaco.value.sexoU;

    const signo = this.objZodiac.obtenerSigno();

    const edad = this.objZodiac.obtenerEdad();

    this.infoFinal = {
      nombreCompleto: `${this.objZodiac.nombreU} ${this.objZodiac.apPaternoU} ${this.objZodiac.apMaternoU}`,
      edad: edad,
      signo: signo,
      imagen: this.objZodiac.obtenerImagen(signo)
    };
  }
}
