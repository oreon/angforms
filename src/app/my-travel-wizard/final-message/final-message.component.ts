import { Component, OnInit } from '@angular/core';
import { WizardService, MyCustomer } from '@app/my-travel-wizard/wizard.service';

@Component({
  selector: 'final-message',
  templateUrl: './final-message.component.html',
  styleUrls: ['./final-message.component.scss']
})
export class FinalMessageComponent implements OnInit {

  entity:MyCustomer

  constructor(protected wizardService:WizardService) {
    this.entity = wizardService.entity;
   }

  ngOnInit() {
  }

}
