import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TravelerService} from './traveler.service';
import { TravelerListComponent } from './traveler-list/traveler-list.component';
import { TravelerAddComponent } from './traveler-add/traveler-add.component';
import { TravelerEditComponent } from './traveler-edit/traveler-edit.component';
import { TravelerRoutingModule} from './traveler-routing.module';
import { NgSelectModule,NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

//import { JsonSchemaFormModule }               from 'angular2-json-schema-form';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    TravelerRoutingModule,
    HttpModule
  ],
  declarations: [
    TravelerListComponent,
    TravelerAddComponent,
    TravelerEditComponent],
  exports: [
    TravelerListComponent,
    TravelerAddComponent,
  ],
  providers: [TravelerService]
})
export class TravelerModule {
}