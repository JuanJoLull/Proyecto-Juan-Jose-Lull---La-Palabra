import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Partida} from "./model/partida.model";

@Injectable({
  providedIn: 'root',
})
export class PartidaService {

  private baseUrl = 'http://localhost:8080/partida'; // URL a tu endpoint

  constructor(private http: HttpClient) { }

  getPartida(): Observable<Partida[]>{
    console.log("Hola");
    return this.http.get<Partida[]>(`${this.baseUrl}`);
  }

    savePartida(jugador: string, intentos: number, winner: boolean): Observable<Partida>{
    return this.http.get<Partida>(`${this.baseUrl}/save/${jugador}/${intentos}/${winner}`)
  }
}
