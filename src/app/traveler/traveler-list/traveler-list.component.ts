
import { Component, OnInit } from '@angular/core';
import { Traveler } from "../traveler";
import {Router} from "@angular/router";
import { TravelerService} from "../traveler.service";
import { BaseListComponent } from '../../base/base-list.component';
import { BaseEntity } from '../../base/base';

@Component({
selector: 'app-traveler-list',
templateUrl: './traveler-list.component.html',
styleUrls: ['./traveler-list.component.css']
})
export class TravelerListComponent extends BaseListComponent<Traveler>
    implements OnInit {

    constructor(protected travelerService: TravelerService, protected router: Router) {
        super(travelerService, router)
    }
}