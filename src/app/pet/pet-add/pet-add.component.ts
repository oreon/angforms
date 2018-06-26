
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
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
        this.petForm= this.fb.group({
name : ['', [  Validators.required ]],
price : ['', [  Validators.required ]],
dob : ['', [  Validators.required ]],
weight : ['', [  Validators.required ]],
neutered : ['', [  Validators.required ]],
description : ['', [  Validators.required ]],
status : ['', [  Validators.required ]],
type : ['', [ ]],
parentType : ['', [ ]],
skills : this.fb.array([ this.createSkillsControls() ])
        //email: ['', [Validators.required, Validators.email]],
        //password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }

createSkillsControls(){
        return this.fb.group({
name : ['', [Validators.required]],
level : ['', [Validators.required]],
            //email: ['', [Validators.required, Validators.email]],
            //password: ['', [Validators.required, Validators.minLength(8)]]
            });
    }

addSkills(): void {
            (this.petForm.get('skills') as FormArray).push(this.createSkillsControls());
        }

        removeSkills(index:number){
            (this.petForm.get('skills') as FormArray ).removeAt(index);
        }

    submit(){
        Object.keys(this.petForm.controls).forEach(field =>
            this.petForm.get(field).markAsTouched()
        );
        console.log(this.petForm.value)
        //console.log("entity", this.entity)
    }

}


