import { Component } from '@angular/core';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private mainService: MainServiceService){}
 



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
