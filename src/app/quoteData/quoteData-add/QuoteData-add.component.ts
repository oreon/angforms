
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

import { QuoteData} from "../quoteData";
import { QuoteDataService} from "../quoteData.service";
import { BaseAdd } from '../../base/base-add';




@Component({
selector: 'app-quoteData-add',
templateUrl: './quoteData-add.component.html',
styleUrls: ['./quoteData-add.component.css']
})
export class QuoteDataAddComponent  extends BaseAdd<QuoteData> implements OnInit {

    quoteData: QuoteData;
    errorMessage: string;
    public quoteDataForm: FormGroup;


    constructor(protected quoteDataService: QuoteDataService, protected router: Router, private fb: FormBuilder) {
        super(quoteDataService, router, 'quoteDatas')
        this.createForm();
    }

    private createForm(): void {
        this.quoteDataForm = this.fb.group({
haveCare : ['', [Validators.required]],
alreadyDeparted : ['', [Validators.required]],
over60 : ['', [Validators.required]],
departure : ['', [Validators.required]],
returnDate : ['', [Validators.required]],
dobOldest : ['', [Validators.required]],
planMember : ['', [Validators.required]],
groupNumber : ['', [Validators.required]],
idNumber : ['', [Validators.required]],
planType : ['', [Validators.required]],
interestedExtra : ['', [Validators.required]],
initialPaymentWithinLast72 : ['', [Validators.required]],
coverageLevel : ['', [Validators.required]],
chosenExtra : ['', [Validators.required]],
travellingForMedical : ['', [Validators.required]],
travellingAgainstAdvice : ['', [Validators.required]],
twoOrMoreStrokes : ['', [Validators.required]],
icd : ['', [Validators.required]],
homeOxygen : ['', [Validators.required]],
terminal : ['', [Validators.required]],
ninetyDayStable : ['', [Validators.required]],
planTotal : ['', [Validators.required]],
trn : ['', [Validators.required]],
        //email: ['', [Validators.required, Validators.email]],
        //password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }


}


