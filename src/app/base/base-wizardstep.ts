import { Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";


export abstract class BaseWizardStep{

    @Input() entity:any
    @Output() stepComplete = new EventEmitter<any>();

    abstract getTheForm():FormGroup
    //abstract createForm():void;

    constructor(){
        //this.entity = <T>{};
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
            this.stepComplete.emit(this.entity);
        }
    }
}