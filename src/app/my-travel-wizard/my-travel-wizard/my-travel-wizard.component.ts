import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

import { BaseWizardComponenet } from '@app/base/base-wizard';


@Component({
  selector: 'app-my-travel-wizard',
  templateUrl: './my-travel-wizard.component.html',
  styleUrls: ['./my-travel-wizard.component.scss']
})
export class MyTravelWizardComponent extends BaseWizardComponenet implements OnInit {

  constructor() { super(); }

  getSteps(){
    return this.steps;
  }

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
}


