import { Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { WizardService } from "@app/my-travel-wizard/wizard.service";

export abstract class BaseWizardStep<T>{

    entity:T 

    @Output() stepComplete = new EventEmitter<T>();

    abstract getForm():FormGroup
    abstract createForm():void;

    constructor(protected fb: FormBuilder){
        this.entity = <T>{};
        this.createForm();
    }
    
    submit(){
        Object.keys(this.getForm().controls).forEach(field =>
            this.getForm().get(field).markAsTouched()
        );

        //this.stepComplete.emit("success");
        console.log(this.getForm().value)
    
        if(this.getForm().valid){
            
            this.entity = this.getForm().value;
            this.stepComplete.emit(this.entity);
        }
    }

}