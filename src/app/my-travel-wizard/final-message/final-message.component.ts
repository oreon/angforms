import { Component, OnInit, Input } from '@angular/core';
import { WizardService, MyCustomer } from '@app/my-travel-wizard/wizard.service';

@Component({
  selector: 'final-message',
  templateUrl: './final-message.component.html',
  styleUrls: ['./final-message.component.scss']
})
export class FinalMessageComponent implements OnInit {

  @Input() entity:MyCustomer = <MyCustomer>{};

  constructor() {
    
   }

  ngOnInit() {
  }

}
