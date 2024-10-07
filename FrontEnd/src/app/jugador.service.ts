import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Jugador} from "./model/jugador.model";
import {Partida} from "./model/partida.model";
import {HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  private baseUrl = 'http://localhost:8080/jugador'; // URL a tu endpoint

  constructor(private http: HttpClient) { }

  getJugador(nombre: string): Observable<Jugador[]>{
    return this.http.get<Jugador[]>(`${this.baseUrl}/${nombre}`);
  }

  saveJugador(nombre: string): Observable<Jugador>{
    return this.http.get<Jugador>(`${this.baseUrl}/save/${nombre}`,);
  }
}
