import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedComponent } from './med/med.component';
import { OptComponent } from './opt/opt.component';
import { TrpComponent } from './trp/trp.component';
import { MyTravelWizardComponent } from './my-travel-wizard/my-travel-wizard.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//import { FinalMessageComponent } from './final-message/final-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MedComponent, OptComponent, TrpComponent, MyTravelWizardComponent, NavigatorComponent]
  ,exports:[
    MyTravelWizardComponent, NavigatorComponent
  ],
  providers: []
})
export class MyTravelWizardModule { }
