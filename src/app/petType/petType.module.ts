import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PetTypeService} from './petType.service';
import { PetTypeListComponent } from './petType-list/petType-list.component';
import { PetTypeAddComponent } from './petType-add/petType-add.component';
import { PetTypeEditComponent } from './petType-edit/petType-edit.component';
import { PetTypeRoutingModule} from './petType-routing.module';
import { NgSelectModule,NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { JsonSchemaFormModule }               from 'angular2-json-schema-form';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    PetTypeRoutingModule,
  ],
  declarations: [
    PetTypeListComponent,
    PetTypeAddComponent,
    PetTypeEditComponent],
  exports: [
    PetTypeListComponent,
    PetTypeAddComponent,
  ],
  providers: [PetTypeService]
})
export class PetTypeModule {
}