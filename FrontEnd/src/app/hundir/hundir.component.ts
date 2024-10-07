import { Component } from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-hundir',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './hundir.component.html',
  styleUrl: './hundir.component.scss'
})
export class HundirComponent {
  tablero: any[][] = [];
  tamano = 10;
  constructor() {
    this.crearTablero();
  }

  crearTablero() {
    for (let i = 0; i < this.tamano; i++) {
      this.tablero[i] = [];
      for (let j = 0; j < this.tamano; j++) {
        this.tablero[i][j] = [];
      }
    }
  }
}
