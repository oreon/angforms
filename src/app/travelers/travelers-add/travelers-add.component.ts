
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

import { Travelers} from "../travelers";
import { TravelersService} from "../travelers.service";
import { BaseEditComponent } from '@app/base/base-edit.component';





@Component({
selector: 'app-travelers-add',
templateUrl: './travelers-add.component.html',
styleUrls: ['./travelers-add.component.css']
})
export class TravelersAddComponent  extends BaseEditComponent<Travelers> implements OnInit {

    travelers: Travelers;
    errorMessage: string;
    public travelersForm: FormGroup;



    constructor(protected travelersService: TravelersService, protected route:ActivatedRoute, protected router: Router, private fb: FormBuilder) {
        super(travelersService, route, router, 'travelerss')
        this.createForm();
    }


    private createForm(): void {
        this.travelersForm= this.fb.group({
        traveler : ['', [  Validators.required ]],

        });
    }



    submit(){
        Object.keys(this.travelersForm.controls).forEach(field =>
            this.travelersForm.get(field).markAsTouched()
        );
        console.log(this.travelersForm.value)
        //console.log("entity", this.entity)
        super.onSubmit(this.entity);
    }

}


