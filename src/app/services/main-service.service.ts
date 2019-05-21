import { Injectable } from '@angular/core';
import { Save } from '../models/save-model';

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
  public twiceClick = 0;
  public superClick = 0;
  public turboClick = 0;
  public manyClick = 0;
  public coastClick = 0;
  public lastClickBuff = 0;
  public twPrice = 5000;
  public spPrice = 10000;
  public trbPrice = 20000;
  public mnPrice = 40000;
  public vcPrice = 80000;
  public lstPrice = 100000;
  public lowPrice = 200;
  public medPrice = 800;
  public strPrice = 1200;




  public autoClick = setInterval(() => { this.points += this.pointsPS; }, 1000);


  constructor() {
  }



  public load() {
    let json = localStorage.getItem('values');
    const data = JSON.parse(json);
    this.points = data.points;
    this.pointsPC = data.pointsPC;
    this.pointsPS = data.pointsPS;
    this.lowCount = data.lowCount;
    this.medCount = data.medCount;
    this.strCount = data.strCount;
    this.twiceClick = data.twiceClick; 
    this.superClick = data.superClick;
    this.turboClick = data.turboClick;
    this.manyClick = data.manyClick;
    this.coastClick = data.coastClick;
    this.lastClickBuff = data.lastClickBuff;
    this.twPrice = data.twPrice;
    this.spPrice = data.spPrice;
    this.trbPrice = data.trbPrice;
    this.mnPrice = data.mnPrice;
    this.vcPrice = data.vcPrice;
    this.lstPrice = data.lstPrice;
    this.lowPrice = data.lowPrice;
    this.medPrice = data.medPrice;
    this.strPrice = data.strPrice;
  }

  public save() {
    localStorage.removeItem('values');
    const newSave = new Save(this.points,
      this.pointsPS,
      this.pointsPC,
      this.lowCount,
      this.medCount,
      this.strCount,
      this.twiceClick,
      this.superClick,
      this.turboClick,
      this.manyClick,
      this.coastClick,
      this.lastClickBuff,
      this.twPrice,
      this.spPrice,
      this.trbPrice,
      this.mnPrice,
      this.vcPrice,
      this.lstPrice,
      this.lowPrice,
      this.medPrice,
      this.strPrice);
    localStorage.setItem('values', JSON.stringify(newSave));
  }
  public devButton() {
    this.pointsPS += 500;
  }
  public clickbuff(n) {
    switch (n) {
      case 0:
        this.pointsPC += 2;
        this.twiceClick++;
        this.points -= this.twPrice;
        this.twPrice += this.twPrice;
        break
      case 1:
        this.pointsPC += 5;
        this.superClick++;
        this.points -= this.spPrice;
        this.spPrice += this.spPrice;
        break
      case 2:
        this.pointsPC += 10;
        this.turboClick++;
        this.points -= this.trbPrice;
        this.trbPrice += this.trbPrice;
        break
      case 3:
        this.pointsPC += 20;
        this.manyClick++;
        this.points -= this.mnPrice;
        this.mnPrice += this.mnPrice;
        break
      case 4:
        this.pointsPC += 200;
        this.coastClick++;
        this.points -= this.vcPrice;
        this.vcPrice += this.vcPrice;
        break
      case 5:
        this.pointsPC += 500;
        this.lastClickBuff++;
        this.points -= this.lstPrice;
        this.lstPrice += this.lstPrice;
        break
    }
  }
  public autoclick(n) {
    switch (n) {
      case 0:
        this.points -= this.lowPrice;
        this.pointsPS += 5;
        this.lowCount++;
        this.lowPrice += this.lowPrice;
        break
      case 1:
        this.points -= this.medPrice;
        this.pointsPS += 10;
        this.medCount++;
        this.medPrice += this.medPrice;
        break
      case 2:
        this.points -= this.strPrice;
        this.pointsPS += 20;
        this.strCount++;
        this.strPrice += this.strPrice;
        break
    }
  }

}
