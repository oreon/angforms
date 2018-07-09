

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { TripListComponent} from './trip-list/trip-list.component';
import { TripAddComponent} from './trip-add/trip-add.component';
import { TripEditComponent} from './trip-edit/trip-edit.component';

const tripRoutes: Routes = [
  {path: 'trips', component: TripListComponent},
  {path: 'trips/add', component: TripAddComponent},
  {path: 'trips/:id/edit', component: TripAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(tripRoutes)],
  exports: [RouterModule]
})

export class TripRoutingModule {
}