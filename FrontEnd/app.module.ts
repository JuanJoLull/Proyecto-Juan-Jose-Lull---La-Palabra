// app.module.ts or feature.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule, NgClass, NgForOf} from '@angular/common';
import {AppComponent} from "./src/app/app.component";
import {NuevaPalabraComponent} from "./src/app/nueva-palabra/nueva-palabra.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PartidaService} from "./src/app/partida.service";
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NuevaPalabraComponent,
    RouterOutlet
  ],
  imports: [
    FormsModule,
    NgForOf,
    NgClass,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    CommonModule // Add CommonModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
