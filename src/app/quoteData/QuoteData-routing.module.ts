

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { QuoteDataListComponent} from './quoteData-list/quoteData-list.component';
import { QuoteDataAddComponent} from './quoteData-add/quoteData-add.component';
import { QuoteDataEditComponent} from './quoteData-edit/quoteData-edit.component';

const quoteDataRoutes: Routes = [
  {path: 'quoteDatas', component: QuoteDataListComponent},
  {path: 'quoteDatas/add', component: QuoteDataAddComponent},
  {path: 'quoteDatas/:id/edit', component: QuoteDataEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(quoteDataRoutes)],
  exports: [RouterModule]
})

export class QuoteDataRoutingModule {
}