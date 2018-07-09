//import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

import {Component,  OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import { Traveler } from '@app/traveler/traveler';

import {CustomValidators}  from '../base/custom-Validators'




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
    entity:any
    petForm:FormGroup


    constructor( protected router: Router, private fb: FormBuilder) {
        //super(petService, router, 'pets')
        this.createForm();
        this.entity = <Traveler>{};
        console.log(this.entity)
        this.entity.skills = []
    }

    private createForm(): void {
        this.petForm = this.fb.group({
        name : ['', [Validators.required, Validators.minLength(3),
             Validators.pattern('^[a-zA-Z]+$')]],
        price : ['', [Validators.required]],
        dob : ['', [Validators.required, CustomValidators.past]],
        weight : ['', [Validators.required]],
        neutered : ['', [ CustomValidators.requiredFalse]],
        description : ['', [Validators.required]],
        status : ['', [Validators.required]],
        
        skills: this.fb.array([ this.createItem() ])

        //email: ['', [Validators.required, Validators.email]],
        //password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }

    createItem(): FormGroup {
        return this.fb.group({
          name: ['', [Validators.required]],
          level: ['', [Validators.required]],
        });
      }

    addSkill(): void {
        (this.petForm.get('skills') as FormArray).push(this.createItem());
    }

    removeSkill(index:number){
        (this.petForm.get('skills') as FormArray ).removeAt(index);
    }

    submit(){
        Object.keys(this.petForm.controls).forEach(field => 
            this.petForm.get(field).markAsTouched()       // {3}
            );  
        console.log(this.petForm.value)
        console.log("entity", this.entity)
    }

}
