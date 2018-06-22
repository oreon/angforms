

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PetListComponent} from './pet-list/pet-list.component';
import { PetAddComponent} from './pet-add/pet-add.component';
import { PetEditComponent} from './pet-edit/pet-edit.component';

const petRoutes: Routes = [
  {path: 'pets', component: PetListComponent},
  {path: 'pets/add', component: PetAddComponent},
  {path: 'pets/:id/edit', component: PetEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(petRoutes)],
  exports: [RouterModule]
})

export class PetRoutingModule {
}