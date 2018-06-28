
import { Component, OnInit } from '@angular/core';

import { Traveler} from "../traveler";
import { TravelerService} from "../traveler.service";
import {ActivatedRoute, Router} from "@angular/router";
import { BaseEditComponent } from '../../base/base-edit.component';


@Component({
selector: 'app-traveler-edit',
templateUrl: './traveler-edit.component.html',
styleUrls: ['./traveler-edit.component.css']
})
export class TravelerEditComponent extends BaseEditComponent<Traveler> implements OnInit {
    traveler: Traveler;
    errorMessage: string;

    constructor(protected travelerService: TravelerService,
    protected route: ActivatedRoute,
    protected router: Router) {
    super(travelerService, route, router, 'travelers')
    }

}