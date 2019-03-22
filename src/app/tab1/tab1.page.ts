import { Component } from '@angular/core';
import { initDomAdapter } from '@angular/platform-browser/src/browser';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 public points = 0;
 public sendpoints = this.points
 public pointsPS = 0;
 public pointsPC = 1;
 public lowCount = 0;
 public medCount = 0;
 public strCount = 0
 public autoClick = setInterval(() => {this.points += this.pointsPS;}, 1000);
 

 
 constructor( private mainService: MainServiceService){}

  ngOnInit(){
    this.mainService.type$.subscribe(type => {
      switch(type){
        case 0:
          this.pointsPS ++;
          this.lowCount ++;
        break;
        case 1:
          this.pointsPS ++;
          this.medCount ++;
        break;
        case 2:
          this.pointsPS ++;
          this.strCount ++;
        break
      }
    });
  }

  set data(value: number){
    this.mainService.points = value;
  }
 
  gainPoints() {
    this.points += this.pointsPC;   
  };
  




  
  getCoinsPS(){

    
  
  }

}
