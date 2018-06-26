import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SkillService} from './skill.service';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillAddComponent } from './skill-add/skill-add.component';
import { SkillEditComponent } from './skill-edit/skill-edit.component';
import { SkillRoutingModule} from './skill-routing.module';
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
    SkillRoutingModule,
    HttpModule
  ],
  declarations: [
    SkillListComponent,
    SkillAddComponent,
    SkillEditComponent],
  exports: [
    SkillListComponent,
    SkillAddComponent,
  ],
  providers: [SkillService]
})
export class SkillModule {
}