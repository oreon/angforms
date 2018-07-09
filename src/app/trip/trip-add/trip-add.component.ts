
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

import { Trip} from "../trip";
import { TripService} from "../trip.service";
import { BaseEditComponent } from '@app/base/base-edit.component';





@Component({
selector: 'app-trip-add',
templateUrl: './trip-add.component.html',
styleUrls: ['./trip-add.component.css']
})
export class TripAddComponent  extends BaseEditComponent<Trip> implements OnInit {

    trip: Trip;
    errorMessage: string;
    public tripForm: FormGroup;



    constructor(protected tripService: TripService, protected route:ActivatedRoute, protected router: Router, private fb: FormBuilder) {
        super(tripService, route, router, 'trips')
        this.createForm();
    }


    private createForm(): void {
        this.tripForm= this.fb.group({
        firstName : ['', [ ]],
lastName : ['', [  Validators.required ]],
haveCare : ['', [  Validators.required ]],
alreadyDeparted : ['', [  Validators.required ]],
over60 : ['', [  Validators.required ]],
departure : ['', [  Validators.required ]],
returnDate : ['', [  Validators.required ]],

        });
    }



    submit(){
        Object.keys(this.tripForm.controls).forEach(field =>
            this.tripForm.get(field).markAsTouched()
        );
        console.log(this.tripForm.value)
        //console.log("entity", this.entity)
        super.onSubmit(this.entity);
    }

}


