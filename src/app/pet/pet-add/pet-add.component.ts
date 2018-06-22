
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

import { Pet} from "../pet";
import { PetService} from "../pet.service";
import { BaseAdd } from '../../base/base-add';

import {PetType} from "@app/petType/petType";
import {Skill} from "@app/skill/skill";



@Component({
selector: 'app-pet-add',
templateUrl: './pet-add.component.html',
styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent  extends BaseAdd<Pet> implements OnInit {

    pet: Pet;
    errorMessage: string;
    public petForm: FormGroup;

type : PetType[]
parentType : PetType[]

    constructor(protected petService: PetService, protected router: Router, private fb: FormBuilder) {
        super(petService, router, 'pets')
        this.createForm();
    }

    private createForm(): void {
        this.petForm = this.fb.group({
name : ['', [Validators.required]],
price : ['', [Validators.required]],
dob : ['', [Validators.required]],
weight : ['', [Validators.required]],
neutered : ['', [Validators.required]],
description : ['', [Validators.required]],
status : ['', [Validators.required]],
type : ['', [Validators.required]],
parentType : ['', [Validators.required]],
        //email: ['', [Validators.required, Validators.email]],
        //password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }

skills : Skill[]

        addskills(){
            this.entity.skills.push(<Skill>{});
        }

        removeskills(index:number){
            this.entity.skills.splice(index, 1);
        }


}


