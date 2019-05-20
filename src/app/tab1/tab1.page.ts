import { Component } from '@angular/core';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 

 constructor( private mainService: MainServiceService){}
  gainPoints() {
      this.mainService.points += this.mainService.pointsPC;  
    };
}
