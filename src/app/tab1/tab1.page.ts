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
 public pointsPS = 0;
 public pointsPC = 1;
 public lowCount = 0;
 public medCount = 0;
 public strCount = 0
 

 
 constructor( private mainService: MainServiceService){}

  ngOnInit(){
    this.mainService.trigger$.subscribe(() => this.getCoinsPS());
  }


  gainPoints() {
  this.points += this.pointsPC;   
  };   
  
  getCoinsPS(){
    
  if (this.points >= 3){
      this.pointsPS += 1;
      this.points -= 0;
      setInterval(() => {
        this.points += this.pointsPS; 
      }, 1000);
      this.lowCount ++;
    }
    else{
      alert("Sorry, you don't have enough points.")
        }
  }

}
