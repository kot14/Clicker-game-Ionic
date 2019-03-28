import { Injectable } from '@angular/core';
import { Save } from '../models/save-model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  public points = 0;
  public pointsPC = 1;
  public pointsPS = 0;
  public lowCount = 0;
  public medCount = 0;
  public strCount = 0;
  public lowPrice = 200;
  public medPrice = 800;
  public strPrice = 1200;


  public autoClick = setInterval(() => {this.points += this.pointsPS;}, 1000);


  constructor(){
  }

  public load(){
    let json = localStorage.getItem('values');
    const data = JSON.parse(json);
    this.points = data.points;
    this.pointsPS = data.pointsPS;
    this.lowCount = data.lowCount;
    this.medCount = data.medCount;
    this.strCount = data.strCount;
    this.lowPrice = data.lowPrice;
    this.medPrice = data.medPrice;
    this.strPrice = data.strPrice;
  }

  public save(){
    localStorage.removeItem('values');
    const newSave = new Save(this.points,
      this.pointsPS,
      this.lowCount,
      this.medCount,
      this.strCount,
      this.lowPrice,
      this.medPrice,
      this.strPrice);
      localStorage.setItem('values', JSON.stringify(newSave));
  }
  public devButton(){
    this.pointsPS += 500;
  }
  public clickbuff(n){
    switch(n){
      case 0:
        this.pointsPC +=2;
      break
      case 1:
        this.pointsPC +=5;
      break
      case 2:
        this.pointsPC +=10;
      break 
      case 3:
        this.pointsPC +=20;
      break
      case 4:
        this.pointsPC +=200;
      break
      case 5:
        this.pointsPC +=500;
      break
    }
  }
  public type0() {
    this.points -= this.lowPrice;
    this.pointsPS += 5;
    this.lowCount ++;
    this.lowPrice += this.lowPrice; 
  }  
  public type1() {
    this.points -= this.medPrice;
    this.pointsPS += 10;
    this.medCount ++;
    this.medPrice += this.medPrice;
  }
  public type2() {
    this.points -= this.strPrice;
    this.pointsPS += 20;
    this.strCount ++;
    this.strPrice += this.strPrice;
  }
}
