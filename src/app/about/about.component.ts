import { Component, OnInit, ViewChild, ViewChildren, QueryList, Output } from '@angular/core';

import { environment } from '@env/environment';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { DataInputWidget } from '@app/mycomps';
import { EventEmitter } from 'protractor';
//import { MyCustomer } from '@app/my-travel-wizard/wizard.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  version: string = environment.version;
  wizardDone:boolean = false

  @ViewChild('acc') acc: NgbAccordion;
  @ViewChildren('dw')  dataWidgets: QueryList<DataInputWidget>
  
  doneIds:number[] = []

  entity = {
    firstName: 'j',
    lastName:'singh',
    amount:'100',
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

  constructor() { 
   }

  ngOnInit() { }

  onWizardComplete(entity:any){
    this.wizardDone = true;
  }

  isDisabled(id:string):boolean{
    let myId:number = parseInt(id.split('')[1])
    //if (this.doneIds.includes(myId) || 
    // if(this.dataWidgets){
    // console.log(this.dataWidgets[myId -1])
    // console.log(myId + "-" + this.current)
    // return this.dataWidgets[myId -1].done || myId === this.current; 
    // }
    return false; 
  }

  current:number = 1;
  getActiveIds = () => "t" + this.current  


  @Output() stepComplete: EventEmitter<any>  = new EventEmitter();

  goNext(event:any){
    console.log(event)
    this.doneIds.push(this.current) 
    this.current++;
    this.acc.toggle(this.getActiveIds());
    if(this.current === this.acc.panels.length){
      this.stepComplete.emit(this.entity)
    }
  }

}
