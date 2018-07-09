

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { TravelersListComponent} from './travelers-list/travelers-list.component';
import { TravelersAddComponent} from './travelers-add/travelers-add.component';
import { TravelersEditComponent} from './travelers-edit/travelers-edit.component';

const travelersRoutes: Routes = [
  {path: 'travelerss', component: TravelersListComponent},
  {path: 'travelerss/add', component: TravelersAddComponent},
  {path: 'travelerss/:id/edit', component: TravelersAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(travelersRoutes)],
  exports: [RouterModule]
})

export class TravelersRoutingModule {
}