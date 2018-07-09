
import { Component, OnInit } from '@angular/core';

import { Travelers} from "../travelers";
import { TravelersService} from "../travelers.service";
import {ActivatedRoute, Router} from "@angular/router";
import { BaseEditComponent } from '../../base/base-edit.component';


@Component({
selector: 'app-travelers-edit',
templateUrl: './travelers-edit.component.html',
styleUrls: ['./travelers-edit.component.css']
})
export class TravelersEditComponent extends BaseEditComponent<Travelers> implements OnInit {
    travelers: Travelers;
    errorMessage: string;

    constructor(protected travelersService: TravelersService,
    protected route: ActivatedRoute,
    protected router: Router) {
    super(travelersService, route, router, 'travelerss')
    }

}