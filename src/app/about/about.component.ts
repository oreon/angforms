import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { MyCustomer } from '@app/my-travel-wizard/wizard.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  version: string = environment.version;

  entity:MyCustomer = <MyCustomer>{}

  constructor() { 
   }

  ngOnInit() { }

}
