

import { BaseWizardStep } from '@app/base/base-wizardstep';

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";


export interface Options{
  amount:string
}

@Component({
  selector: 'app-opt',
  templateUrl: './opt.component.html',
  styleUrls: ['./opt.component.scss']
})
export class OptComponent extends BaseWizardStep implements OnInit  {

  errorMessage: string;
  public myForm: FormGroup;

  constructor(protected fb: FormBuilder){ 
    super(); 
    this.createForm();
   }

   getTheForm():FormGroup{
    return this.myForm;
  }

   createForm(): void {
      this.myForm= this.fb.group({
        amount: ['',[Validators.required]],
    
      });
      //console.log(this.trip)
  }


  ngOnInit() {
  }



}