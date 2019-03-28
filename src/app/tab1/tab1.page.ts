import { Component } from '@angular/core';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 public pointsPC = 1;

 constructor( private mainService: MainServiceService){}
  gainPoints() {
      this.mainService.points += this.pointsPC;   
    };
    lowButton(){
      this.mainService.type0();
    }
  
    mediumButton(){
      this.mainService.type1();
      
    }
  
    strongButton(){
      this.mainService.type2();
    }   

}
