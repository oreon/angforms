import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TripService} from './trip.service';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripAddComponent } from './trip-add/trip-add.component';
import { TripEditComponent } from './trip-edit/trip-edit.component';
import { TripRoutingModule} from './trip-routing.module';
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
    TripRoutingModule,
    HttpModule
  ],
  declarations: [
    TripListComponent,
    TripAddComponent,
    TripEditComponent],
  exports: [
    TripListComponent,
    TripAddComponent,
  ],
  providers: [TripService]
})
export class TripModule {
}