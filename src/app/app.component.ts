import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from "./formularios/distancia/distancia.component";
import { ZodiacoComponent } from './formularios/zodiaco/zodiaco.component';
import { AporBComponent } from "./formularios/apor-b/apor-b.component";
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './navbar/navbar.component';
import { TempComponent } from "./tem/temp/temp.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
