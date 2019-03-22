import { Component } from '@angular/core';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private mainService: MainServiceService){}
  
  public points = 0;
  public lowCounter = 0;
  public medCounter = 0;
  public strCounter = 0;
  public lowPrice = 200;
  public medPrice = 800;
  public strPrice = 1200;

  get data():number { 
    return this.points = this.mainService.points; 
  } 

  lowButton(){
    this.mainService.type0();
    this.lowCounter ++ ;
    this.lowPrice += this.lowPrice;
    console.log(this.points);
  }

  mediumButton(){
    this.mainService.type1();
    this.medCounter ++;
    this.medPrice += this.medPrice;
  }

  strongButton(){
    this.mainService.type2();
    this.strCounter ++;
    this.strPrice += this.medPrice;
  }
}
