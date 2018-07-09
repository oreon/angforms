
import { Component, OnInit } from '@angular/core';

import { Trip} from "../trip";
import { TripService} from "../trip.service";
import {ActivatedRoute, Router} from "@angular/router";
import { BaseEditComponent } from '../../base/base-edit.component';


@Component({
selector: 'app-trip-edit',
templateUrl: './trip-edit.component.html',
styleUrls: ['./trip-edit.component.css']
})
export class TripEditComponent extends BaseEditComponent<Trip> implements OnInit {
    trip: Trip;
    errorMessage: string;

    constructor(protected tripService: TripService,
    protected route: ActivatedRoute,
    protected router: Router) {
    super(tripService, route, router, 'trips')
    }

}