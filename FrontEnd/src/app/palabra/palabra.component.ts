import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

export interface CharDetails {
  letra: string,
  clase: number,
}

@Component({
  selector: 'app-palabra',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.scss']
})
export class PalabraComponent {

  static readonly MAX_INTENTOS = 5;

  private static readonly letras: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  private static readonly palabras: string[] = [
    "PERRO", "GATOS", "LUGAR", "LIBRO", "COSAS", "CERCA", "FUERA", "MESAS", "SILLA", "NIÑOS",
    "FLORA", "FRUTA", "PAPEL", "VIDAS", "VISTA", "RAMAS", "BREVE", "BROTE", "CLIMA", "FUEGO",
    "RAYOS", "ROCAS", "SABIO", "SAUNA", "SEÑAL", "SERIE", "SOLAZ", "SUAVE", "TENIS", "TONTO"
  ];

  static palabraOriginal: string
  static combinacionAdivino: string[]
  static acierto: boolean
  static palabraMaster: string
  intentos = 0;
  static intentoUser = "";

  char1: CharDetails = {letra: '', clase: 0};
  char2: CharDetails = {letra: '', clase: 0};
  char3: CharDetails = {letra: '', clase: 0};
  char4: CharDetails = {letra: '', clase: 0};
  char5: CharDetails = {letra: '', clase: 0};
  char6: CharDetails = {letra: '', clase: 0};
  char7: CharDetails = {letra: '', clase: 0};
  char8: CharDetails = {letra: '', clase: 0};
  char9: CharDetails = {letra: '', clase: 0};
  char10: CharDetails = {letra: '', clase: 0};
  char11: CharDetails = {letra: '', clase: 0};
  char12: CharDetails = {letra: '', clase: 0};
  char13: CharDetails = {letra: '', clase: 0};
  char14: CharDetails = {letra: '', clase: 0};
  char15: CharDetails = {letra: '', clase: 0};
  char16: CharDetails = {letra: '', clase: 0};
  char17: CharDetails = {letra: '', clase: 0};
  char18: CharDetails = {letra: '', clase: 0};
  char19: CharDetails = {letra: '', clase: 0};
  char20: CharDetails = {letra: '', clase: 0};
  char21: CharDetails = {letra: '', clase: 0};
  char22: CharDetails = {letra: '', clase: 0};
  char23: CharDetails = {letra: '', clase: 0};
  char24: CharDetails = {letra: '', clase: 0};
  char25: CharDetails = {letra: '', clase: 0};

  intento1: string = '';
  intento2: string = '';
  intento3: string = '';
  intento4: string = '';
  intento5: string = '';

  nuevaPalabra(): void {
    //Generamos número para elegir en el array de palabras
    const selecPalabra = Math.floor(Math.random() * PalabraComponent.palabras.length);
    PalabraComponent.palabraMaster = PalabraComponent.palabras[selecPalabra];
    //Console de comprobación
    console.log(PalabraComponent.palabraMaster + " " + this.intentos);
    this.borrarPartida();
  }

  onEnterPressed1() {
    this.intento1 = (this.char1.letra + this.char2.letra + this.char3.letra + this.char4.letra + this.char5.letra).toUpperCase();
    console.log("Intento del usuario:", this.intento1);
    PalabraComponent.intentoUser = this.intento1;
    if (this.comprobarPalabra(PalabraComponent.intentoUser)) {
      console.log("Acertaste");
    } else {
      this.comprobarCaracter(PalabraComponent.intentoUser);
      console.log("NO");
    }
  }

  onEnterPressed2() {
    this.intento2 = (this.char6.letra + this.char7.letra + this.char8.letra + this.char9.letra + this.char10.letra).toUpperCase();
    console.log("Intento del usuario:", this.intento2);
    PalabraComponent.intentoUser = this.intento2;
    if (this.comprobarPalabra(PalabraComponent.intentoUser)) {
      console.log("Acertaste");
    } else {
      this.comprobarCaracter(PalabraComponent.intentoUser);
      console.log("NO");
    }
  }

  onEnterPressed3() {
    this.intento3 = (this.char11.letra + this.char12.letra + this.char13.letra + this.char14.letra + this.char15.letra).toUpperCase();
    console.log("Intento del usuario:", this.intento3);
    PalabraComponent.intentoUser = this.intento3;
    if (this.comprobarPalabra(PalabraComponent.intentoUser)) {
      console.log("Acertaste");
    } else {
      this.comprobarCaracter(PalabraComponent.intentoUser);
      console.log("NO");
    }
  }

  onEnterPressed4() {
    this.intento4 = (this.char16.letra + this.char17.letra + this.char18.letra + this.char19.letra + this.char20.letra).toUpperCase();
    console.log("Intento del usuario:", this.intento4);
    PalabraComponent.intentoUser = this.intento4;
    if (this.comprobarPalabra(PalabraComponent.intentoUser)) {
      console.log("Acertaste");
    } else {
      this.comprobarCaracter(PalabraComponent.intentoUser);
      console.log("NO");
    }
  }

  onEnterPressed5() {
    this.intento5 = (this.char21.letra + this.char22.letra + this.char23.letra + this.char24.letra + this.char25.letra).toUpperCase();
    console.log("Intento del usuario:", this.intento5);
    PalabraComponent.intentoUser = this.intento5;
    if (this.comprobarPalabra(PalabraComponent.intentoUser)) {
      console.log("Acertaste");
    } else {
      this.comprobarCaracter(PalabraComponent.intentoUser).forEach((item, index) => {

      });

      console.log("PERDISTE");
    }
  }

  comprobarPalabra(intentoUser: string): boolean {
    this.intentos++;
    return PalabraComponent.intentoUser == PalabraComponent.palabraMaster;
  }

  comprobarCaracter(intentoUser: string): number[] {
    // split separa el string en caracteres
    const letrasUser = intentoUser.split('');
    const letrasPalabra = PalabraComponent.palabraMaster.split('');
    // 2 es Verde, 1 es Amarillo, 0 es blanco(default)
    const comprobacion: number[] = [];

    // Compara los caracteres de cada posición
    for (let i = 0; i < PalabraComponent.palabraMaster.length; i++) {
      if (letrasUser[i] === letrasPalabra[i]) {
        comprobacion[i] = 2;
        letrasUser[i] = '';
      } else if (PalabraComponent.palabraMaster.includes(letrasUser[i])){
        comprobacion[i] = 1;
    } else {
        comprobacion[i] = 0;
        }
      }
    console.log(comprobacion);
    return comprobacion;
  }

  //Borra pantalla
  borrarPartida(){
    this.char1 = {letra: '', clase: 0};
    this.char2= {letra: '', clase: 0};
    this.char3= {letra: '', clase: 0};
    this.char4= {letra: '', clase: 0};
    this.char5= {letra: '', clase: 0};
    this.char6= {letra: '', clase: 0};
    this.char7= {letra: '', clase: 0};
    this.char8= {letra: '', clase: 0};
    this.char9= {letra: '', clase: 0};
    this.char10 = {letra: '', clase: 0};
    this.char11 = {letra: '', clase: 0};
    this.char12 = {letra: '', clase: 0};
    this.char13 = {letra: '', clase: 0};
    this.char14 = {letra: '', clase: 0};
    this.char15 = {letra: '', clase: 0};
    this.char16 = {letra: '', clase: 0};
    this.char17 = {letra: '', clase: 0};
    this.char18 = {letra: '', clase: 0};
    this.char19 = {letra: '', clase: 0};
    this.char20 = {letra: '', clase: 0};
    this.char21 = {letra: '', clase: 0};
    this.char22 = {letra: '', clase: 0};
    this.char23 = {letra: '', clase: 0};
    this.char24 = {letra: '', clase: 0};
    this.char25 = {letra: '', clase: 0};

    this.intento1 = '';
    this.intento2 = '';
    this.intento3 = '';
    this.intento4 = '';
    this.intento5 = '';
  }
}
