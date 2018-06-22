import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PetService} from './pet.service';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetAddComponent } from './pet-add/pet-add.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetRoutingModule} from './pet-routing.module';
import { NgSelectModule,NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillModule } from '@app/skill/skill.module';

//import { JsonSchemaFormModule }               from 'angular2-json-schema-form';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    PetRoutingModule,
    SkillModule
  ],
  declarations: [
    PetListComponent,
    PetAddComponent,
    PetEditComponent],
  exports: [
    PetListComponent,
    PetAddComponent,
  ],
  providers: [PetService]
})
export class PetModule {
}