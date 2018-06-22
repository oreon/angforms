
import { Component, OnInit } from '@angular/core';
import { PetType } from "../petType";
import {Router} from "@angular/router";
import { PetTypeService} from "../petType.service";
import { BaseListComponent } from '../../base/base-list.component';
import { BaseEntity } from '../../base/base';

@Component({
selector: 'app-petType-list',
templateUrl: './petType-list.component.html',
styleUrls: ['./petType-list.component.css']
})
export class PetTypeListComponent extends BaseListComponent<PetType>
    implements OnInit {

    constructor(protected petTypeService: PetTypeService, protected router: Router) {
        super(petTypeService, router)
    }
}