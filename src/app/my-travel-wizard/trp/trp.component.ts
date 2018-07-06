
import { BaseWizardStep } from '@app/base/base-wizardstep';

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

//import {Trip}

import { BaseEditComponent } from '@app/base/base-edit.component';
import { Trip } from '@app/my-travel-wizard/trp/trip';
import { WizardService } from '@app/my-travel-wizard/wizard.service';

@Component({
  selector: 'app-trp',
  templateUrl: './trp.component.html',
  styleUrls: ['./trp.component.scss']
})
export class TrpComponent extends BaseWizardStep<Trip> implements OnInit  {

  errorMessage: string;
  public tripForm: FormGroup;

  constructor(protected fb: FormBuilder){ 
   super(fb); 
  }

  getForm():FormGroup{
    return this.tripForm;
  }

  createForm(): void {
      this.tripForm= this.fb.group({
        email: ['',[Validators.required]],
        mobile: ['',[]]
      });
      //console.log(this.trip)
  }


  ngOnInit() {
  }



}
