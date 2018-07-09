import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TravelersService} from './travelers.service';
import { TravelersListComponent } from './travelers-list/travelers-list.component';
import { TravelersAddComponent } from './travelers-add/travelers-add.component';
import { TravelersEditComponent } from './travelers-edit/travelers-edit.component';
import { TravelersRoutingModule} from './travelers-routing.module';
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
    TravelersRoutingModule,
    HttpModule
  ],
  declarations: [
    TravelersListComponent,
    TravelersAddComponent,
    TravelersEditComponent],
  exports: [
    TravelersListComponent,
    TravelersAddComponent,
  ],
  providers: [TravelersService]
})
export class TravelersModule {
}