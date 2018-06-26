
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

import { Skill} from "../skill";
import { SkillService} from "../skill.service";
import { BaseAdd } from '../../base/base-add';




@Component({
selector: 'app-skill-add',
templateUrl: './skill-add.component.html',
styleUrls: ['./skill-add.component.css']
})
export class SkillAddComponent  extends BaseAdd<Skill> implements OnInit {

    skill: Skill;
    errorMessage: string;
    public skillForm: FormGroup;


    constructor(protected skillService: SkillService, protected router: Router, private fb: FormBuilder) {
        super(skillService, router, 'skills')
        this.createForm();
    }


    private createForm(): void {
        this.skillForm= this.fb.group({
name : ['', [  Validators.required ]],
level : ['', [  Validators.required ]],
        //email: ['', [Validators.required, Validators.email]],
        //password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }



    submit(){
        Object.keys(this.skillForm.controls).forEach(field =>
            this.skillForm.get(field).markAsTouched()
        );
        console.log(this.skillForm.value)
        //console.log("entity", this.entity)
    }

}


