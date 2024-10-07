import {AfterViewInit, Component, EventEmitter, QueryList, ViewChildren} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {PartidaService} from "../partida.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SwitchService} from "../services/switch.service";
import {JugadorService} from "../jugador.service";
import {Partida} from "../model/partida.model";

@Component({
  selector: 'app-nueva-palabra',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgClass,
    FlexLayoutModule,
    HttpClientModule,
    NgIf
  ],
  providers: [
      PartidaService,
      JugadorService
  ],
  templateUrl: './nueva-palabra.component.html',
  styleUrl: './nueva-palabra.component.scss'
})

export class NuevaPalabraComponent implements AfterViewInit{
  // Metodo que permite comunicación entre Html y TS
  @ViewChildren('charInputs') charInputs!: QueryList<any>;
  @ViewChildren('palabraInputs') palabraInputs!: QueryList<any>;

  private static readonly palabras2: string[] = [
    "PERRO", "GATOS", "LUGAR", "LIBRO", "COSAS", "CERCA", "FUERA", "MESAS", "SILLA", "NIÑOS",
    "FLORA", "FRUTA", "PAPEL", "VIDAS", "VISTA", "RAMAS", "BREVE", "BROTE", "CLIMA", "FUEGO",
    "RAYOS", "ROCAS", "SABIO", "SAUNA", "SEÑAL", "SERIE", "SOLAZ", "SUAVE", "TENIS", "TONTO"
  ];

  palabraMaster: string = '';
  palabras = [
      [{letra: '', clase: 0, disabled: false}, {letra: '', clase: 0, disabled: false}, {letra: '', clase: 0, disabled: false}, {letra: '', clase: 0, disabled: false}, {letra: '', clase: 0, disabled: false}],
      [{letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}],
      [{letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}],
      [{letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}],
      [{letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}]
  ];
//Variables para almacenar datos de la partida
  aciertos: string[] = ['', '', '', '', ''];
  intentos = 0;
  nombreUsuario: string= "";
  winner: boolean = false;
//Array para almacenar los datos de la partida
  partidas: Partida[] = [{id: 0, jugador: this.nombreUsuario, intentos:this.intentos, winner: this.winner}];
//Variables para los modales
  modalSwitch: boolean = false;
  modalSwitchJug: boolean = false;
  //Constante usado en la función de fin de partida
  private MAX_INTENTOS: number = 5;

  constructor(private modalSS: SwitchService, private partidaService: PartidaService, private jugadorService: JugadorService) {
  }

  nuevaPalabra(): void {
    //Generamos número para elegir en el array de palabras
    const selecPalabra = Math.floor(Math.random() * NuevaPalabraComponent.palabras2.length);
    this.palabraMaster = NuevaPalabraComponent.palabras2[selecPalabra];
    this.borrarPartida();
    this.charInputs?.toArray()[0].nativeElement.focus();
    console.log(this.palabraMaster)
    this.jugadorService.saveJugador(this.nombreUsuario).subscribe();
    this.closeNameModal();
  }

  //Borra pantalla y reinicia contador
  borrarPartida() {
    this.palabras = [
        [{letra: '', clase: 0, disabled: false}, {letra: '', clase: 0, disabled: false}, {letra: '', clase: 0, disabled: false}, {letra: '', clase: 0, disabled: false}, {letra: '', clase: 0, disabled: false}],
        [{letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}],
        [{letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}],
        [{letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}],
        [{letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}, {letra: '', clase: 0, disabled: true}]
    ];
    this.aciertos = ['', '', '', '', ''];
    this.intentos = 0;
    this.winner = false;
  }

  onInput(event: any, indiceLetra: number, indicePalabra: number) {
    if (event.inputType !== 'deleteContentBackward' && indiceLetra < 4) {
      // Palabra que se esta jugando * 5(numero de fila) + letra en la que se encuentra el jugador.
      indiceLetra = indicePalabra * 5 + indiceLetra;
      this.focusNextInput(indiceLetra)
    }
  }

  focusNextInput(indiceletra: number, indicePalabra = -1) {
    if (indicePalabra >= 0) {
      this.palabras[indicePalabra + 1].forEach((palabra, index) => {
        palabra.disabled = false;
        if (index === 0) {
          const nextInput = this.charInputs.toArray()[indiceletra + 1];
          nextInput.nativeElement.disabled = false;
          //nativeElement es una propiedad del objeto
          nextInput?.nativeElement.focus();
        }
      })
    }
    // Selecciona el elemento del array según su posición pasada por parametro y se enfoca en el siguiente
    const nextInput = this.charInputs.toArray()[indiceletra + 1];
    //nativeElement es una propiedad del objeto
    nextInput?.nativeElement.focus();
  }

  focusPreviousInput(indiceLetra: number) {
    const previousInput = this.charInputs.toArray()[indiceLetra - 1];
    previousInput?.nativeElement.focus();
  }
  //Función que actua al pulsar intro, solo funciona alfinal de cada intento
  onEnterPressed(letra: string, indiceLetra: number, indicePalabra: number) {
    this.intentos++;
    if (letra && indiceLetra === 4) {
      // .map es un forEach que devuelve el valor que le pides
      // .join junta los valores que le ha devuelto el map como array
      // .toUpperCase cambia el valor obtenido a mayúsculas para la comprobación
      const intentoUser = this.palabras[indicePalabra]
        .map((caracter) => {
          caracter.disabled = true;
          return caracter.letra
        })
        .join('')
        .toUpperCase();
      // Si la palabra coincide, devuelve clase = 2 que colorea todos los cuadrados
      if (this.comprobarPalabra(intentoUser)) {
        this.palabras[indicePalabra].forEach((caracter) => {
          caracter.clase = 2;
        })
        this.aciertos = this.palabraMaster.split('');
      // Si no ha habido acierto, pasa a comprobar por caracteres
      } else if(this.intentos < this.MAX_INTENTOS){
        this.comprobarCaracter(intentoUser, indicePalabra);
        indiceLetra = indicePalabra * 5 + indiceLetra;
        this.focusNextInput(indiceLetra, indicePalabra);
      }
    }
    this.finPartida();
  }

  onDeletePressed(indiceLetra: number, indicePalabra: number) {
      if (!this.palabras[indicePalabra][indiceLetra].letra) {
          indiceLetra = indicePalabra * 5 + indiceLetra;
        this.focusPreviousInput(indiceLetra)
      }
  }
  comprobarPalabra(intentoUser: string): boolean {
    this.winner = (intentoUser === this.palabraMaster);
    return intentoUser === this.palabraMaster;
  }

  comprobarCaracter(intentoUser: string, indicePalabra: number): void {
    // split separa el string en caracteres
    const letrasUser = intentoUser.split('');
    const letrasPalabra = this.palabraMaster.split('');
    // Compara los caracteres de cada posición
    // 2 es Verde, 1 es Amarillo, 0 es blanco(default)
    for (let i = 0; i < this.palabraMaster.length; i++) {
      if (letrasUser[i] === letrasPalabra[i]) {
        this.palabras[indicePalabra][i].clase = 2;
        // this.aciertos[i] = this.palabras[indicePalabra][i].letra;
      } else if (this.palabraMaster.includes(letrasUser[i])) {
        this.palabras[indicePalabra][i].clase = 1;
      } else {
        this.palabras[indicePalabra][i].clase = 0;
      }
    }
  }

  finPartida(){
    if(this.winner){
      console.log("Entra al finPartida");
      this.partidaService.savePartida(this.nombreUsuario, this.intentos, this.winner).subscribe();
    } else if(this.intentos >= this.MAX_INTENTOS){
      console.log("Entra sin intentos restantos");
      this.partidaService.savePartida(this.nombreUsuario, this.intentos, this.winner).subscribe();
    }
  }

  // Funciones que abren, cierran y gestionan los modales.
  openNameModal(){
    this.modalSwitch = true;
  }

  closeNameModal(){
    this.modalSwitch = false;
  }

  openJugModal(){
    this.modalSwitchJug = true;
    this.partidaService.getPartida().subscribe((resultado)=> {
      this.partidas = resultado;
    });
  }

  closeJugModal(){
    this.modalSwitchJug = false;
  }

  ngAfterViewInit(){
    this.modalSS.$modal.subscribe((valor) =>
    {this.modalSwitch = valor});
    this.modalSS.$modal.subscribe((valor) =>
    {this.modalSwitchJug = valor});
  }
}

