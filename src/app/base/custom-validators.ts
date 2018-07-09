
import { AbstractControl, FormControl } from '@angular/forms';
import * as moment from 'moment';


export  class CustomValidators {
    /**
     * Validator that requires a boolean controls to have a value that is false, also checks for isrequired.
     */
    static requiredFalse = (control: FormControl) =>{
        if(control.value === '') return { required: true};
        if (control.value === true)  return { requiredFalse: true };
        return null;
    }

    static past = (control: FormControl) =>
         ( moment(new Date()).isBefore(control.value) )?  { 'isPast':true } : null;
    

    static future = (control: FormControl) => 
        ( moment(new Date()).isAfter(control.value) )?  { 'isFuture':true } : null;

}    

