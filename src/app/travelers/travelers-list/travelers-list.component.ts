
import { Component, OnInit } from '@angular/core';
import { Travelers } from "../travelers";
import {Router} from "@angular/router";
import { TravelersService} from "../travelers.service";
import { BaseListComponent } from '../../base/base-list.component';
import { BaseEntity } from '../../base/base';

@Component({
selector: 'app-travelers-list',
templateUrl: './travelers-list.component.html',
styleUrls: ['./travelers-list.component.css']
})
export class TravelersListComponent extends BaseListComponent<Travelers>
    implements OnInit {

    constructor(protected travelersService: TravelersService, protected router: Router) {
        super(travelersService, router)
    }
}