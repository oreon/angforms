
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

import { Traveler} from "../traveler";
import { TravelerService} from "../traveler.service";
import { BaseEditComponent } from '@app/base/base-edit.component';





@Component({
selector: 'app-traveler-add',
templateUrl: './traveler-add.component.html',
styleUrls: ['./traveler-add.component.css']
})
export class TravelerAddComponent  extends BaseEditComponent<Traveler> implements OnInit {

    traveler: Traveler;
    errorMessage: string;
    public travelerForm: FormGroup;



    constructor(protected travelerService: TravelerService, protected route:ActivatedRoute, protected router: Router, private fb: FormBuilder) {
        super(travelerService, route, router, 'travelers')
        this.createForm();
    }


    private createForm(): void {
        this.travelerForm= this.fb.group({
        firstName : ['', [  Validators.required ]],
lastName : ['', [  Validators.required ]],
gender : ['', [  Validators.required ]],
dob : ['', [  Validators.required ]],
relationship : ['', [  Validators.required ]],

        });
    }



    submit(){
        Object.keys(this.travelerForm.controls).forEach(field =>
            this.travelerForm.get(field).markAsTouched()
        );
        console.log(this.travelerForm.value)
        //console.log("entity", this.entity)
        super.onSubmit(this.entity);
    }

}


