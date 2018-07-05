

import { BaseWizardStep } from '@app/base/base-wizardstep';

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import { WizardService } from '@app/my-travel-wizard/wizard.service';

export interface Med{
  medicalConditions:string
}

@Component({
  selector: 'app-med',
  templateUrl: './med.component.html',
  styleUrls: ['./med.component.scss']
})
export class MedComponent extends BaseWizardStep<Med> implements OnInit  {

  errorMessage: string;
  public tripForm: FormGroup;

  constructor(protected fb: FormBuilder, protected wizardService: WizardService){ 
    super(fb, wizardService); 
   }

  getForm():FormGroup{
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