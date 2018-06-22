//import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

import {Component,  OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";


import {PetType} from "@app/petType/petType";
import {Skill} from "@app/skill/skill";
import { Pet } from '@app/pet/pet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // quote: string;
  // isLoading: boolean;

  // constructor(private quoteService: QuoteService) { }

  // ngOnInit() {
  //   this.isLoading = true;
  //   this.quoteService.getRandomQuote({ category: 'dev' })
  //     .pipe(finalize(() => { this.isLoading = false; }))
  //     .subscribe((quote: string) => { this.quote = quote; });
  // }

  ngOnInit() { }

  entity: Pet;
    errorMessage: string;
    public petForm: FormGroup;

type : PetType[]
parentType : PetType[]

    constructor( protected router: Router, private fb: FormBuilder) {
        //super(petService, router, 'pets')
        this.createForm();
        this.entity = <Pet>{};
        console.log(this.entity)
        this.entity.skills = []
    }

    private createForm(): void {
        this.petForm = this.fb.group({
        name : ['', [Validators.required, Validators.minLength(3),
             Validators.pattern('^[a-zA-Z]+$')]],
        price : ['', [Validators.required]],
        dob : ['', [Validators.required]],
        weight : ['', [Validators.required]],
        neutered : ['', [ Validators.requiredTrue]],
        description : ['', [Validators.required]],
        status : ['', [Validators.required]],

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

        submit(){
            Object.keys(this.petForm.controls).forEach(field => 
                this.petForm.get(field).markAsTouched()       // {3}
              );  
          console.log(this.petForm.value)
          console.log("entity", this.entity)
        }

}
