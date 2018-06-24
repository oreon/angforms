
import { Component, OnInit } from '@angular/core';
import { QuoteData } from "../quoteData";
import {Router} from "@angular/router";
import { QuoteDataService} from "../quoteData.service";
import { BaseListComponent } from '../../base/base-list.component';
import { BaseEntity } from '../../base/base';

@Component({
selector: 'app-quoteData-list',
templateUrl: './quoteData-list.component.html',
styleUrls: ['./quoteData-list.component.css']
})
export class QuoteDataListComponent extends BaseListComponent<QuoteData>
    implements OnInit {

    constructor(protected quoteDataService: QuoteDataService, protected router: Router) {
        super(quoteDataService, router)
    }
}