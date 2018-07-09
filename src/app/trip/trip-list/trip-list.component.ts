
import { Component, OnInit } from '@angular/core';
import { Trip } from "../trip";
import {Router} from "@angular/router";
import { TripService} from "../trip.service";
import { BaseListComponent } from '../../base/base-list.component';
import { BaseEntity } from '../../base/base';

@Component({
selector: 'app-trip-list',
templateUrl: './trip-list.component.html',
styleUrls: ['./trip-list.component.css']
})
export class TripListComponent extends BaseListComponent<Trip>
    implements OnInit {

    constructor(protected tripService: TripService, protected router: Router) {
        super(tripService, router)
    }
}