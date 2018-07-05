
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

import { QuoteData} from "../quoteData";
import { QuoteDataService} from "../quoteData.service";
import { BaseEditComponent } from '@app/base/base-edit.component';

import {Traveler} from "@app/traveler/traveler";




@Component({
selector: 'app-quoteData-add',
templateUrl: './quoteData-add.component.html',
styleUrls: ['./quoteData-add.component.css']
})
export class QuoteDataAddComponent  extends BaseEditComponent<QuoteData> implements OnInit {

    quoteData: QuoteData;
    errorMessage: string;
    public quoteDataForm: FormGroup;



    constructor(protected quoteDataService: QuoteDataService, protected route:ActivatedRoute, protected router: Router, private fb: FormBuilder) {
        super(quoteDataService, route, router, 'quoteDatas')
        this.createForm();
    }


    private createForm(): void {
        this.quoteDataForm= this.fb.group({
        haveCare : ['', [  Validators.required ]],
alreadyDeparted : ['', [  Validators.required ]],
over60 : ['', [  Validators.required ]],
departure : ['', [  Validators.required ]],
returnDate : ['', [  Validators.required ]],
dobOldest : ['', [  Validators.required ]],
planMember : ['', [  Validators.required ]],
groupNumber : ['', [  Validators.required ]],
idNumber : ['', [  Validators.required ]],
planType : ['', [  Validators.required ]],
interestedExtra : ['', [  Validators.required ]],
initialPaymentWithinLast72 : ['', [  Validators.required ]],
coverageLevel : ['', [  Validators.required ]],
chosenExtra : ['', [  Validators.required ]],
travellingForMedical : ['', [  Validators.required ]],
travellingAgainstAdvice : ['', [  Validators.required ]],
twoOrMoreStrokes : ['', [  Validators.required ]],
icd : ['', [  Validators.required ]],
homeOxygen : ['', [  Validators.required ]],
terminal : ['', [  Validators.required ]],
ninetyDayStable : ['', [  Validators.required ]],
planTotal : ['', [  Validators.required ]],
trn : ['', [  Validators.required ]],
traveler : this.fb.array([ this.createTravelerControls() ])

        });
    }

createTravelerControls(){
        return this.fb.group({
        firstName : ['', [  Validators.required ]],
lastName : ['', [  Validators.required ]],
gender : ['', [  Validators.required ]],
dob : ['', [  Validators.required ]],
relationship : ['', [  Validators.required ]],

            });
    }

addTraveler(): void {
            (this.quoteDataForm.get('traveler') as FormArray).push(this.createTravelerControls());
        }

        removeTraveler(index:number){
            (this.quoteDataForm.get('traveler') as FormArray ).removeAt(index);
        }

    submit(){
        Object.keys(this.quoteDataForm.controls).forEach(field =>
            this.quoteDataForm.get(field).markAsTouched()
        );
        console.log(this.quoteDataForm.value)
        //console.log("entity", this.entity)
        super.onSubmit(this.entity);
    }

}


