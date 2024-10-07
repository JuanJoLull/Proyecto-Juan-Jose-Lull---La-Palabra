import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PalabraComponent} from "./palabra/palabra.component";
import {HundirComponent} from "./hundir/hundir.component";
import {NuevaPalabraComponent} from "./nueva-palabra/nueva-palabra.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PalabraComponent, HundirComponent, NuevaPalabraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Proyecto';
}
