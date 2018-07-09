
import { BaseWizardStep } from '@app/base/base-wizardstep';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
//import {Trip}


import { Trip } from '@app/my-travel-wizard/trp/trip';


@Component({
  selector: 'app-trp',
  templateUrl: './trp.component.html',
  styleUrls: ['./trp.component.scss']
})
export class TrpComponent extends BaseWizardStep implements OnInit  {

  errorMessage: string;
  public tripForm: FormGroup;
  petForm:FormGroup

  constructor(protected fb: FormBuilder){ 
   super(); 
   this.createForm();
  }

  getTheForm():FormGroup{
    return this.tripForm;
  }

  createForm(): void {
    this.petForm= this.fb.group({
      name : ['', [  Validators.required ]],
    })

      this.tripForm= this.fb.group({
        //firstName: ['',[Validators.required]],
        lastName:['',[Validators.required]],
      })

      console.log(this.tripForm.get('firstName'))

      //   name : ['', [  Validators.required ]],
      //   price : ['', [  Validators.required ]],

      //   firstName: ['',[Validators.required]],
      //   lastName:['',[Validators.required]],
      //   mobile: ['',[]]
      // });
      // console.log(this.tripForm)
  }


  ngOnInit() {
  }



}
