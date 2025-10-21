import { Component, EventEmitter } from '@angular/core';

import { TemhComponent } from "../temh/temh.component";

@Component({
  selector: 'app-temp',
  imports: [ TemhComponent],
  templateUrl: './temp.component.html',
  styleUrl: './temp.component.css'
})
export class TempComponent {

  title:string="Hola desde Papa";

  mensaje2:string="";
  recibirMensaje($event:string){
    this.mensaje2=$event;
  }


}
