

import { BaseWizardStep } from '@app/base/base-wizardstep';

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";


export interface Med{
  medicalConditions:string
}

@Component({
  selector: 'app-med',
  templateUrl: './med.component.html',
  styleUrls: ['./med.component.scss']
})
export class MedComponent extends BaseWizardStep implements OnInit  {

  errorMessage: string;
  public tripForm: FormGroup;

  constructor(protected fb: FormBuilder){ 
    super(); 
    this.createForm();
   }

  getTheForm():FormGroup{
    return this.tripForm;
  }

   createForm(): void {
      this.tripForm= this.fb.group({
        medicalConditions: ['',[Validators.required]],
      });
      //console.log(this.trip)
  }


  ngOnInit() {
  }



}