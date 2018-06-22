
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

import { PetType} from "../petType";
import { PetTypeService} from "../petType.service";
import { BaseAdd } from '../../base/base-add';




@Component({
selector: 'app-petType-add',
templateUrl: './petType-add.component.html',
styleUrls: ['./petType-add.component.css']
})
export class PetTypeAddComponent  extends BaseAdd<PetType> implements OnInit {

    petType: PetType;
    errorMessage: string;
    public petTypeForm: FormGroup;


    constructor(protected petTypeService: PetTypeService, protected router: Router, private fb: FormBuilder) {
        super(petTypeService, router, 'petTypes')
        this.createForm();
    }

    private createForm(): void {
        this.petTypeForm = this.fb.group({
name : ['', [Validators.required]],
        //email: ['', [Validators.required, Validators.email]],
        //password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }


}


