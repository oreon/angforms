import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

import * as _ from "lodash";

export abstract class BaseWizardComponenet  {

  currentInd:number = 0;
  @Output() wizardComplete = new EventEmitter<any>();

  @Input() entity:any;

  abstract getSteps():any[]

  public showMe = (ind: number): boolean => ind === this.currentInd;

  wizardDone = ():boolean =>  this.currentInd >= this.getSteps().length
  
  onNext(msg:any):void{
    this.currentInd++; // = this.current + 1;
    _.assign(this.entity, msg);
    console.log(this.entity);
    if(this.wizardDone()){
      this.wizardComplete.emit(this.entity);
    }
  }

}