import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuoteDataService} from './quoteData.service';
import { QuoteDataListComponent } from './quoteData-list/quoteData-list.component';
import { QuoteDataAddComponent } from './quoteData-add/quoteData-add.component';
import { QuoteDataEditComponent } from './quoteData-edit/quoteData-edit.component';
import { QuoteDataRoutingModule} from './quoteData-routing.module';
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
    QuoteDataRoutingModule,
    HttpModule
  ],
  declarations: [
    QuoteDataListComponent,
    QuoteDataAddComponent,
    QuoteDataEditComponent],
  exports: [
    QuoteDataListComponent,
    QuoteDataAddComponent,
  ],
  providers: [QuoteDataService]
})
export class QuoteDataModule {
}