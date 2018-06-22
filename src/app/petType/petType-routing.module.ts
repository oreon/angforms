

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PetTypeListComponent} from './petType-list/petType-list.component';
import { PetTypeAddComponent} from './petType-add/petType-add.component';
import { PetTypeEditComponent} from './petType-edit/petType-edit.component';

const petTypeRoutes: Routes = [
  {path: 'petTypes', component: PetTypeListComponent},
  {path: 'petTypes/add', component: PetTypeAddComponent},
  {path: 'petTypes/:id/edit', component: PetTypeEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(petTypeRoutes)],
  exports: [RouterModule]
})

export class PetTypeRoutingModule {
}