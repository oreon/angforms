
import { Component, OnInit } from '@angular/core';

import { QuoteData} from "../quoteData";
import { QuoteDataService} from "../quoteData.service";
import {ActivatedRoute, Router} from "@angular/router";
import { BaseEditComponent } from '../../base/base-edit.component';


@Component({
selector: 'app-quoteData-edit',
templateUrl: './quoteData-edit.component.html',
styleUrls: ['./quoteData-edit.component.css']
})
export class QuoteDataEditComponent extends BaseEditComponent<QuoteData> implements OnInit {
    quoteData: QuoteData;
    errorMessage: string;

    constructor(protected quoteDataService: QuoteDataService,
    protected route: ActivatedRoute,
    protected router: Router) {
    super(quoteDataService, route, router, 'quoteDatas')
    }

}