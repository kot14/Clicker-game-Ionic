import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  public points: number;
  private _type = new Subject<number>();
  public type$ = this._type.asObservable();
  constructor() { }

  public type0(t0 = 0) {
    this._type.next(t0);
  }
  public type1(t1 = 1) {
    this._type.next(t1);
  }
  public type2(t2 = 2) {
    this._type.next(t2);
  }
}
