import { Component, OnInit } from '@angular/core';
import { MyCustomer } from '@app/my-travel-wizard/wizard.service';
import * as _ from "lodash";

@Component({
  selector: 'app-my-travel-wizard',
  templateUrl: './my-travel-wizard.component.html',
  styleUrls: ['./my-travel-wizard.component.scss']
})
export class MyTravelWizardComponent implements OnInit {

  currentInd = 0;
  constructor() { }
  entity:MyCustomer =<MyCustomer>{}

  steps = [
    { name: 'trip',
    },
    { name: 'options',
      // disabledImg: 'assets/travel/quote.png',
      // activeImg: 'assets/travel/quoteActiveTL.png',
      // completeImg: 'assets/travel/quoteActive.png'
    },
    { name: 'medical'}
  ]

  ngOnInit() {
  }

  public showMe(ind: number): boolean {
    return ind === this.currentInd;
  }

  onNext(msg:any):void{
    this.currentInd++; // = this.current + 1;
    _.assign(this.entity, msg);
    console.log(this.entity);
  }

  showFinal():boolean{
    return this.currentInd >= 3;
  }


}


