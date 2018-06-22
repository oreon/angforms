
import { Component, OnInit } from '@angular/core';

import { PetType} from "../petType";
import { PetTypeService} from "../petType.service";
import {ActivatedRoute, Router} from "@angular/router";
import { BaseEditComponent } from '../../base/base-edit.component';


@Component({
selector: 'app-petType-edit',
templateUrl: './petType-edit.component.html',
styleUrls: ['./petType-edit.component.css']
})
export class PetTypeEditComponent extends BaseEditComponent<PetType> implements OnInit {
    petType: PetType;
    errorMessage: string;

    constructor(protected petTypeService: PetTypeService,
    protected route: ActivatedRoute,
    protected router: Router) {
    super(petTypeService, route, router, 'petTypes')
    }

}