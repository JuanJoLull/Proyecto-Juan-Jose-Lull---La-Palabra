import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  private modalSubject = new Subject<boolean>();
  $modal = this.modalSubject.asObservable();

  open() {
    this.modalSubject.next(true);
  }

  close() {
    this.modalSubject.next(false);
  }


}

