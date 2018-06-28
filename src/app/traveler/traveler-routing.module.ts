

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { TravelerListComponent} from './traveler-list/traveler-list.component';
import { TravelerAddComponent} from './traveler-add/traveler-add.component';
import { TravelerEditComponent} from './traveler-edit/traveler-edit.component';

const travelerRoutes: Routes = [
  {path: 'travelers', component: TravelerListComponent},
  {path: 'travelers/add', component: TravelerAddComponent},
  {path: 'travelers/:id/edit', component: TravelerAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(travelerRoutes)],
  exports: [RouterModule]
})

export class TravelerRoutingModule {
}