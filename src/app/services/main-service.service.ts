import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  private _trigger = new Subject<void>();
  constructor() { }

  get trigger$() {
    return this._trigger.asObservable();
  }
  public triggerOnMyButton() {
    this._trigger.next();
  }
}
