import { NgModule, Component, ElementRef, AfterContentInit, OnDestroy, Input, Output, EventEmitter, 
    ContentChildren, QueryList, ChangeDetectorRef, Inject, OnInit, forwardRef} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';


export abstract class DataInputWidget{

    @Input() entity:any
    @Output() stepComplete = new EventEmitter<any>();
    done:boolean = false;

    abstract getTheForm():FormGroup
    //abstract createForm():void;

    constructor(){
        this.entity = {};
        //this.createForm();
    }
    
    submit(){
        Object.keys(this.getTheForm().controls).forEach(field =>
            this.getTheForm().get(field).markAsTouched()
        );
        //this.stepComplete.emit("success");
        console.log(this.getTheForm().value)
        if(this.getTheForm().valid){
            this.entity = this.getTheForm().value;
            this.done = true;
            this.stepComplete.emit(this.entity);
        }
    }
}

@Component({
    selector: 'med',
    template: `
    <div class="form-wrapper text-center" >
    <h2 class="text-center">Medical Conditions you have </h2>
    <form [formGroup]="tripForm" (submit)="submit()" novalidate>
        <input formControlName="meds" placeholder="conditions" [(ngModel)]="entity.meds" >
      <button type="submit" class="btn btn-primary">Next</button>
    </form>
</div>
    `,
  })
  export class MedComponent  extends DataInputWidget implements OnInit  {
  
    errorMessage: string;
    public tripForm: FormGroup;

    getTheForm():FormGroup {return this.tripForm}
  
    constructor(protected fb: FormBuilder){ 
      super(); 
      this.createForm();
     }

    ngOnInit(){}
  
     createForm(): void {
        this.tripForm= this.fb.group({
          meds: ['',[Validators.required]],
        });
    }
  }

  @Component({
    selector: 'amt',
    template: `
    <div class="form-wrapper text-center" >
    <h2 class="text-center">Amt insurance wanted for</h2>
    <form [formGroup]="tripForm" (submit)="submit()" novalidate>
      <input formControlName="amount" placeholder="amount" number [(ngModel)]="entity.amount">
      <button type="submit" class="btn btn-primary">Next</button>
    </form>
</div>
    `,
  })
  export class AmtComponent extends DataInputWidget implements OnInit  {
  
    errorMessage: string;
    public tripForm: FormGroup;

    getTheForm():FormGroup {return this.tripForm}
  
    constructor(protected fb: FormBuilder){ 
      super(); 
      this.createForm();
     }

    ngOnInit(){}
  
     createForm(): void {
        this.tripForm= this.fb.group({
          amount: ['',[Validators.required, Validators.min(3)]],
        });
    }
  }


@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    exports: [MedComponent, AmtComponent],
    declarations: [MedComponent, AmtComponent]
})
export class MyCompsModule { }