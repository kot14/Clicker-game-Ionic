import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  public points = 0;
  
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
