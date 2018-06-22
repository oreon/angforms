

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SkillListComponent} from './skill-list/skill-list.component';
import { SkillAddComponent} from './skill-add/skill-add.component';
import { SkillEditComponent} from './skill-edit/skill-edit.component';

const skillRoutes: Routes = [
  {path: 'skills', component: SkillListComponent},
  {path: 'skills/add', component: SkillAddComponent},
  {path: 'skills/:id/edit', component: SkillEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(skillRoutes)],
  exports: [RouterModule]
})

export class SkillRoutingModule {
}